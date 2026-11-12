import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { initController } from "./controller";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "expo.out";
let mm: gsap.MatchMedia | null = null;

function initHeroIntro() {
  const name = document.querySelector<HTMLElement>("[data-hero-name]");
  if (!name) return;
  const split = SplitText.create(name, { type: "words,chars", mask: "chars" });
  const tl = gsap.timeline({ delay: document.getElementById("preloader") ? 2.0 : 0.1 });
  tl.from(split.chars, { yPercent: 110, duration: 1.1, ease: EASE, stagger: 0.035 })
    .from("[data-hero-item]", { y: 18, opacity: 0, duration: 0.9, ease: EASE, stagger: 0.08 }, "-=0.8")
    .from("[data-ann]", { clipPath: "inset(0 100% 0 0)", duration: 1.4, ease: "expo.inOut" }, 0.3);
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


/* Cursor: dot follows tightly, ring trails, dots and glow light up around it.
   Only for a fine pointer with motion allowed; otherwise the native cursor stays. */
let cursorReady = false;
function initCursor() {
  if (cursorReady) return;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const root = document.documentElement;
  if (!dot || !ring) return;
  cursorReady = true;

  // The light effect works for everyone with a mouse; the custom cursor only without reduced motion.
  const custom = fine && !calm;
  if (custom) root.classList.add("has-cursor");

  const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
  const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
  const rx = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
  const ry = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });
  let shown = false;

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    root.style.setProperty("--x", `${e.clientX}px`);
    root.style.setProperty("--y", `${e.clientY}px`);
    if (!custom) return;
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    if (!shown) { gsap.to([dot, ring], { opacity: 1, duration: 0.3 }); shown = true; }
  }, { passive: true });

  document.addEventListener("pointerleave", () => {
    root.style.setProperty("--x", "-999px");
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 }); shown = false;
  });

  const interactive = 'a, button, [role="button"], [role="slider"], input, .tilt-card-parent';
  document.addEventListener("pointerover", (e) => {
    if (!custom) return;
    const hit = (e.target as Element)?.closest?.(interactive);
    ring.classList.toggle("is-hover", !!hit);
    gsap.to(ring, { scale: hit ? 1.8 : 1, duration: 0.3, ease: "power3.out" });
    gsap.to(dot, { scale: hit ? 0.5 : 1, duration: 0.3 });
  });
  document.addEventListener("pointerdown", () => custom && gsap.to(ring, { scale: 0.8, duration: 0.15, yoyo: true, repeat: 1 }));
}

export function initMotion() {
  initCursor();
  mm?.revert();
  mm = gsap.matchMedia();
  mm.add(
    { motion: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" },
    (ctx) => {
      const { reduced } = ctx.conditions as { motion: boolean; reduced: boolean };
      initPreloader(reduced);
      const stopMotor = initController(reduced);
      if (reduced) {
        gsap.set("[data-reveal]", { opacity: 1 });
        return () => stopMotor?.();
      }
      initHeroIntro();
      initReveals();
      initProgress();
      initTilt();
      return () => stopMotor?.();
    },
  );
}

document.addEventListener("astro:before-swap", () => { mm?.revert(); mm = null; });
