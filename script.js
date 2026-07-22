gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.fromTo(
  ".hero-content",
  {
    opacity: 0,
    y: 80,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
  },
);

gsap.fromTo(
  ".hero-image",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.3,
    delay: 0.3,
    ease: "power3.out",
  },
);

// Services
gsap.fromTo(
  ".service-card",
  {
    opacity: 0,
    y: 60,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 75%",
      once: true,
    },
  },
);

// Why Ezra
gsap.fromTo(
  ".why-card",
  {
    opacity: 0,
    y: 60,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".why",
      start: "top 75%",
      once: true,
    },
  },
);

// Portfolio
gsap.fromTo(
  ".project-card",
  {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top 75%",
      once: true,
    },
  },
);

// Statistics
gsap.fromTo(
  ".stat-card",
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stats",
      start: "top 75%",
      once: true,
    },
  },
);
// ===========================
// OUR PROCESS
// ===========================

gsap.fromTo(
  ".process-card",
  {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".process",
      start: "top 75%",
      once: true,
    },
  },
);
// ===========================
// TECH STACK
// ===========================

gsap.fromTo(
  ".tech-card",
  {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".tech-stack",
      start: "top 75%",
      once: true,
    },
  },
);

// CTA

gsap.fromTo(
  ".cta-box",
  {
    opacity: 0,
    y: 80,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta",
      start: "top 75%",
      once: true,
    },
  },
);
// ===========================
// FOOTER
// ===========================

gsap.fromTo(
  ".footer-col",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 85%",
      once: true,
    },
  },
);
const glow = document.querySelector(".cursor-glow");

gsap.set(glow, {
  xPercent: -50,
  yPercent: -50,
});

const xTo = gsap.quickTo(glow, "x", {
  duration: 0.22,
  ease: "power3.out",
});

const yTo = gsap.quickTo(glow, "y", {
  duration: 0.22,
  ease: "power3.out",
});

window.addEventListener("pointermove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});
