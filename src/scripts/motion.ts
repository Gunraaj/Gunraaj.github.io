import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "expo.out";
let mm: gsap.MatchMedia | null = null;

/* ── Hero oscilloscope trace ───────────────────────────────────────
   y = A · e^(−ζ·k·x) · sin(ωx + φ). Scrolling through the hero raises ζ,
   so the sustained oscillation becomes a damped response that settles. */
function initScope(reduced: boolean) {
  const svg = document.querySelector<SVGSVGElement>("[data-scope]");
  const path = svg?.querySelector<SVGPathElement>("[data-scope-trace]");
  const ghost = svg?.querySelector<SVGPathElement>("[data-scope-ghost]");
  const readout = document.querySelector<HTMLElement>("[data-scope-zeta]");
  if (!svg || !path) return;

  const W = 1200, H = 240, mid = H / 2, N = 240;
  const state = { zeta: 0, phase: 0, amp: 0.78 };

  const build = () => {
    let d = "";
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const x = t * W;
      const env = Math.exp(-state.zeta * 6 * t);
      const y = mid - state.amp * mid * env * Math.sin(t * Math.PI * 9 + state.phase);
      d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
    }
    path.setAttribute("d", d);
    ghost?.setAttribute("d", d);
    if (readout) readout.textContent = state.zeta.toFixed(2);
  };
  build();

  if (reduced) {
    state.zeta = 0.7;
    build();
    return;
  }

  const len = path.getTotalLength();
  gsap.fromTo(path, { strokeDasharray: len, strokeDashoffset: len },
    { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", delay: 0.5,
      onComplete: () => gsap.set(path, { clearProps: "strokeDasharray,strokeDashoffset" }) });

  // Slow drift, like a free-running timebase.
  const drift = () => { state.phase -= 0.012; build(); };
  gsap.ticker.add(drift);

  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    onUpdate: (self) => { state.zeta = self.progress * 1.1; },
  });

  // Pause the drift when the hero is off screen.
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => self.isActive ? gsap.ticker.add(drift) : gsap.ticker.remove(drift),
  });

  return () => gsap.ticker.remove(drift);
}

function initHeroIntro() {
  const name = document.querySelector<HTMLElement>("[data-hero-name]");
  if (!name) return;
  const split = SplitText.create(name, { type: "chars", mask: "chars" });
  const tl = gsap.timeline({ delay: document.getElementById("preloader") ? 2.0 : 0.1 });
  tl.from(split.chars, { yPercent: 110, duration: 1.1, ease: EASE, stagger: 0.035 })
    .from("[data-hero-item]", { y: 18, opacity: 0, duration: 0.9, ease: EASE, stagger: 0.08 }, "-=0.8")
    .from("[data-hero-photo]", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "expo.inOut" }, 0.1);
}

function initReveals() {
  document.querySelectorAll<HTMLElement>(".section-title").forEach((title) => {
    const split = SplitText.create(title, { type: "words", mask: "words" });
    gsap.from(split.words, {
      yPercent: 100, duration: 1, ease: EASE, stagger: 0.06,
      scrollTrigger: { trigger: title, start: "top 85%" },
    });
  });

  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.08, overwrite: true }),
  });
}

function initProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1, ease: "none",
    scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.3 },
  });
}

function initPreloader(reduced: boolean) {
  const pre = document.getElementById("preloader");
  const text = document.getElementById("loader-text");
  const main = document.getElementById("main-content");
  if (!pre || !text) return;

  const finish = () => {
    pre.remove();
    if (main) {
      main.removeAttribute("data-preloading");
      gsap.set(main, { clearProps: "opacity,scale" });
    }
    ScrollTrigger.refresh();
  };

  // Skip on repeat visits in the same tab, and for reduced motion.
  let seen = false;
  try { seen = sessionStorage.getItem("preloaded") === "1"; sessionStorage.setItem("preloaded", "1"); } catch {}
  if (reduced || seen) {
    finish();
    return;
  }

  const words = (pre.dataset.words || "").split("|");
  gsap.set(main, { opacity: 0, scale: 0.98 });
  main?.removeAttribute("data-preloading");
  const tl = gsap.timeline({ onComplete: finish });
  tl.to("#loader-progress", { scaleX: 1, duration: 1.6, ease: "power1.inOut" }, 0)
    .to("#loader-quote", { opacity: 1, duration: 0.4 }, 0.05);
  words.forEach((w, i) => {
    tl.call(() => { text.textContent = w; }, [], 0.1 + i * 0.45)
      .fromTo(text, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: EASE }, 0.1 + i * 0.45);
  });
  tl.to(pre, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "+=0.15")
    .to(main, { opacity: 1, scale: 1, duration: 0.8, ease: EASE }, "<0.2");
}

function initTilt() {
  document.querySelectorAll<HTMLElement>(".tilt-card-parent").forEach((parent) => {
    const card = parent.querySelector<HTMLElement>(".tilt-card-inner");
    if (!card) return;
    gsap.set(card, { transformPerspective: 1000 });
    const rx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });
    parent.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = parent.getBoundingClientRect();
      rx(-4 * ((e.clientY - r.top) / r.height - 0.5) * 2);
      ry(4 * ((e.clientX - r.left) / r.width - 0.5) * 2);
    });
    parent.addEventListener("pointerleave", () => { rx(0); ry(0); });
  });
}

export function initMotion() {
  mm?.revert();
  mm = gsap.matchMedia();
  mm.add(
    { motion: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" },
    (ctx) => {
      const { reduced } = ctx.conditions as { motion: boolean; reduced: boolean };
      initPreloader(reduced);
      const stopScope = initScope(reduced);
      if (reduced) {
        gsap.set("[data-reveal]", { opacity: 1 });
        return;
      }
      initHeroIntro();
      initReveals();
      initProgress();
      initTilt();
      return () => stopScope?.();
    },
  );
}

document.addEventListener("astro:before-swap", () => { mm?.revert(); mm = null; });
