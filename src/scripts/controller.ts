import { gsap } from "gsap";

/* Hybrid ANN + PI motor speed loop, simulated live (after the PM-BLDC project).
   A small 3-5-1 network reads speed error, error rate and setpoint, and scales the
   PI proportional gain. Everything drawn comes from the actual forward pass. */

const RPM_MAX = 3000, RPM_MIN = 300;
const TAU = Math.PI * 2;
const TAU_MOTOR = 0.3;   // s, mechanical time constant
const KP0 = 1.4, KI = 2.6;
const HISTORY = 240;     // samples at 60 Hz sim time = 4 s window

const W1 = [[3, 0.5, 0], [-3, -0.5, 0], [0, 1.5, 0], [1, 0, 1], [-1, 0, 1]];
const B1 = [-0.5, -0.5, 0, -0.5, -0.5];
const W2 = [0.6, 0.6, 0.2, -0.3, -0.3];
const IN_LABELS = ["e", "ė", "r"];

export function initController(reduced: boolean): (() => void) | undefined {
  const root = document.querySelector<HTMLElement>("[data-ann]");
  const canvas = root?.querySelector<HTMLCanvasElement>("canvas");
  if (!root || !canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const out = (k: string) => root.querySelector<HTMLElement>(`[data-ann-${k}]`);
  const rOut = out("r"), wOut = out("w"), kOut = out("kp");

  // Normalised state: speeds as a fraction of RPM_MAX.
  const sim = { r: 0.5, w: 0.12, I: 0, ePrev: 0.38, load: 0, kp: KP0, inputs: [0, 0, 0], hidden: [0, 0, 0, 0, 0], o: 0 };
  const hist = { r: new Array(HISTORY).fill(sim.r), w: new Array(HISTORY).fill(sim.w) };
  let simClock = 0, sampleClock = 0, autoClock = 0, userUntil = 0, pulse = 0;
  let w = 0, h = 0, dpr = 1;
  let colors = readColors();

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n: string) => cs.getPropertyValue(n).trim().split(/\s+/).join(",");
    return { p: v("--color-primary"), hd: v("--color-heading"), m: v("--color-muted"), b: v("--color-border"), bg: v("--color-surface") };
  }

  function forward(e: number, de: number, r: number) {
    sim.inputs = [e, Math.max(-1, Math.min(1, de)), r];
    sim.hidden = W1.map((row, j) => Math.tanh(row[0] * e + row[1] * sim.inputs[1] + row[2] * r + B1[j]));
    sim.o = Math.tanh(sim.hidden.reduce((s, a, j) => s + a * W2[j], 0));
    sim.kp = KP0 * (1 + 0.8 * sim.o);
  }

  function step(dt: number) {
    const e = sim.r - sim.w;
    forward(e, (e - sim.ePrev) / dt / 10, sim.r);
    sim.ePrev = e;
    let u = sim.kp * e + KI * sim.I;
    const sat = u > 1.25 || u < 0;
    u = Math.max(0, Math.min(1.25, u));
    if (!sat) sim.I += e * dt;
    sim.w += ((u - sim.load) - sim.w) / TAU_MOTOR * dt;
  }

  function advance(seconds: number) {
    const dt = 0.005;
    for (let t = 0; t < seconds; t += dt) {
      step(dt);
      simClock += dt; sampleClock += dt; autoClock += dt;
      if (sampleClock >= 1 / 60) {
        sampleClock -= 1 / 60;
        hist.r.shift(); hist.r.push(sim.r);
        hist.w.shift(); hist.w.push(sim.w);
      }
      // Idle demo: new setpoint every 3 s, a load step halfway through each hold.
      if (simClock > userUntil && autoClock > 3) {
        autoClock = 0;
        sim.r = [0.35, 0.8, 0.55, 0.9, 0.25][Math.floor(simClock / 3) % 5];
      }
      sim.load = autoClock > 1.6 && autoClock < 2.4 ? 0.12 : 0;
    }
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    draw();
  };

  function draw() {
    if (!w || !h) return;
    const c = colors;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.font = "11px 'JetBrains Mono', monospace";

    // ── Network ──
    const netW = w < 500 ? w * 0.48 : Math.min(w * 0.38, 360);
    const pad = 18;
    const cols = [pad + 14, netW / 2, netW - pad - 10];
    const ys = (n: number) => Array.from({ length: n }, (_, i) => h * 0.12 + (h * 0.76) * (n === 1 ? 0.5 : i / (n - 1)));
    const yIn = ys(3), yHid = ys(5), yOut = ys(1);
    const nodeR = Math.max(5, Math.min(11, h / 24, w / 40));

    const edge = (x1: number, y1: number, x2: number, y2: number, s: number, k: number) => {
      const a = Math.min(1, Math.abs(s));
      ctx.strokeStyle = s >= 0 ? `rgba(${c.p},${0.12 + a * 0.75})` : `rgba(${c.m},${0.12 + a * 0.6})`;
      ctx.lineWidth = 0.6 + a * 2.2;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      if (!reduced && a > 0.25) {
        const t = (pulse + k * 0.137) % 1;
        ctx.fillStyle = `rgba(${s >= 0 ? c.p : c.m},${a})`;
        ctx.beginPath(); ctx.arc(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, 1.6 + a * 1.4, 0, TAU); ctx.fill();
      }
    };
    W1.forEach((row, j) => row.forEach((wt, i) => edge(cols[0], yIn[i], cols[1], yHid[j], wt * sim.inputs[i], i * 5 + j)));
    W2.forEach((wt, j) => edge(cols[1], yHid[j], cols[2], yOut[0], wt * sim.hidden[j], 20 + j));

    const node = (x: number, y: number, act: number) => {
      ctx.fillStyle = `rgba(${c.bg},1)`;
      ctx.beginPath(); ctx.arc(x, y, nodeR, 0, TAU); ctx.fill();
      ctx.fillStyle = `rgba(${act >= 0 ? c.p : c.m},${Math.min(1, Math.abs(act)) * 0.9})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${c.hd},0.35)`; ctx.lineWidth = 1; ctx.stroke();
    };
    yIn.forEach((y, i) => node(cols[0], y, sim.inputs[i] * 2));
    yHid.forEach((y, j) => node(cols[1], y, sim.hidden[j]));
    node(cols[2], yOut[0], sim.o);

    ctx.fillStyle = `rgba(${c.m},1)`;
    yIn.forEach((y, i) => ctx.fillText(IN_LABELS[i], cols[0] - nodeR - 12, y + 4));
    ctx.fillText("Kp", cols[2] - 6, yOut[0] - nodeR - 8);

    // Wire from the network output into the plant plot
    const x0 = netW + 20, x1 = w - 6;
    ctx.strokeStyle = `rgba(${c.p},0.5)`; ctx.setLineDash([3, 4]); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cols[2] + nodeR, yOut[0]); ctx.lineTo(x0, yOut[0]); ctx.stroke();
    ctx.setLineDash([]);

    // ── Speed plot ──
    const top = h * 0.1, bot = h * 0.9;
    const Y = (v: number) => bot - Math.min(1.1, v) / 1.1 * (bot - top);
    ctx.strokeStyle = `rgba(${c.b},1)`; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let g = 0; g <= 4; g++) { const y = top + (bot - top) * g / 4; ctx.moveTo(x0, y); ctx.lineTo(x1, y); }
    for (let g = 0; g <= 8; g++) { const x = x0 + (x1 - x0) * g / 8; ctx.moveTo(x, top); ctx.lineTo(x, bot); }
    ctx.stroke();

    const stepX = (x1 - x0) / (HISTORY - 1);
    ctx.strokeStyle = `rgba(${c.hd},0.55)`; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.4;
    ctx.beginPath(); hist.r.forEach((v, k) => k ? ctx.lineTo(x0 + k * stepX, Y(v)) : ctx.moveTo(x0, Y(v))); ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = `rgba(${c.p},1)`; ctx.lineWidth = 2.2;
    ctx.beginPath(); hist.w.forEach((v, k) => k ? ctx.lineTo(x0 + k * stepX, Y(v)) : ctx.moveTo(x0, Y(v))); ctx.stroke();
    ctx.fillStyle = `rgba(${c.p},1)`;
    ctx.beginPath(); ctx.arc(x1, Y(sim.w), 3.5, 0, TAU); ctx.fill();

    ctx.fillStyle = `rgba(${c.hd},0.6)`; ctx.fillText("setpoint", x0 + 8, top + 14);
    ctx.fillStyle = `rgba(${c.p},1)`; ctx.fillText("speed", x0 + 78, top + 14);
    if (sim.load > 0) { ctx.fillStyle = `rgba(${c.m},1)`; ctx.fillText("load step", x1 - 70, top + 14); }
  }

  const render = () => {
    const rpm = (v: number) => Math.round(v * RPM_MAX).toString();
    if (rOut) rOut.textContent = rpm(sim.r);
    if (wOut) wOut.textContent = rpm(sim.w);
    if (kOut) kOut.textContent = sim.kp.toFixed(2);
    root.setAttribute("aria-valuenow", rpm(sim.r));
    root.setAttribute("aria-valuetext", `setpoint ${rpm(sim.r)} rpm, speed ${rpm(sim.w)} rpm`);
  };

  const tick = (_t: number, dtMs: number) => {
    advance(Math.min(dtMs, 50) / 1000);
    pulse = (pulse + dtMs / 1400) % 1;
    draw(); render();
  };

  const setTarget = (rpm: number) => {
    const clamped = Math.max(RPM_MIN, Math.min(RPM_MAX, rpm));
    sim.r = clamped / RPM_MAX;
    userUntil = simClock + 6;
    autoClock = 0;
    if (reduced) { advance(1.5); draw(); render(); }
    return clamped;
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" && e.type === "pointermove") return;
    const rect = root.getBoundingClientRect();
    // Higher on the panel = faster, like reading a speed axis.
    const f = 1 - (e.clientY - rect.top) / rect.height;
    setTarget(RPM_MIN + Math.max(0, Math.min(1, (f - 0.1) / 0.8)) * (RPM_MAX - RPM_MIN));
  };
  const onKey = (e: KeyboardEvent) => {
    const d = e.key === "ArrowUp" || e.key === "ArrowRight" ? 150 : e.key === "ArrowDown" || e.key === "ArrowLeft" ? -150 : 0;
    if (!d) return;
    e.preventDefault();
    setTarget(sim.r * RPM_MAX + d);
  };

  root.addEventListener("pointermove", onMove);
  root.addEventListener("pointerdown", onMove);
  root.addEventListener("keydown", onKey);
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const mo = new MutationObserver(() => { colors = readColors(); draw(); });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  // Warm up so the first frame already shows a step response.
  advance(4.5);
  resize(); render();

  let running = false;
  const io = new IntersectionObserver(([en]) => {
    if (reduced) return;
    if (en.isIntersecting && !running) { gsap.ticker.add(tick); running = true; }
    else if (!en.isIntersecting && running) { gsap.ticker.remove(tick); running = false; }
  });
  io.observe(root);

  return () => {
    gsap.ticker.remove(tick);
    io.disconnect(); ro.disconnect(); mo.disconnect();
    root.removeEventListener("pointermove", onMove);
    root.removeEventListener("pointerdown", onMove);
    root.removeEventListener("keydown", onKey);
  };
}
