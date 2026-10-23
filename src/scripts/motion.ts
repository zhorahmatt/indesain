import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease = 'expo.out';

export let lenis: Lenis | null = null;

function initSmoothScroll() {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// data-reveal="lines" — each line slides up from behind a mask.
function revealLines(el: HTMLElement) {
  const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'line' });
  const onLoad = el.dataset.trigger === 'load';
  gsap.set(el, { visibility: 'visible' });
  gsap.from(split.lines, {
    yPercent: 110,
    duration: 1.4,
    stagger: 0.09,
    ease,
    delay: Number(el.dataset.delay ?? 0),
    scrollTrigger: onLoad ? undefined : { trigger: el, start: 'top 88%', once: true },
  });
}

// data-reveal="words" — words brighten as the paragraph scrolls through the viewport.
function revealWords(el: HTMLElement) {
  const split = SplitText.create(el, { type: 'words' });
  gsap.set(el, { visibility: 'visible' });
  gsap.fromTo(
    split.words,
    { opacity: 0.14 },
    {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
    },
  );
}

// data-reveal="fade" — soft rise; children with data-stagger animate in sequence.
function revealFade(el: HTMLElement) {
  const children = el.hasAttribute('data-stagger') ? Array.from(el.children) : [el];
  gsap.set(el, { visibility: 'visible' });
  gsap.from(children, {
    y: 32,
    opacity: 0,
    duration: 1.2,
    stagger: 0.06,
    ease,
    delay: Number(el.dataset.delay ?? 0),
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  });
}

// data-reveal="media" — image frame opens from the bottom edge.
function revealMedia(el: HTMLElement) {
  gsap.set(el, { visibility: 'visible' });
  gsap.from(el, {
    clipPath: 'inset(100% 0% 0% 0%)',
    duration: 1.6,
    ease: 'expo.inOut',
    scrollTrigger: { trigger: el, start: 'top 92%', once: true },
  });
}

// data-count="80" — number counts up when it enters the viewport.
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const counter = { value: 0 };
  gsap.to(counter, {
    value: target,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    onUpdate: () => {
      el.textContent = Math.round(counter.value).toString();
    },
  });
}

function parallax(el: HTMLElement) {
  const target = el.querySelector<HTMLElement>('[data-parallax-target]');
  if (!target) return;
  gsap.fromTo(
    target,
    { yPercent: -6 },
    {
      yPercent: 6,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    },
  );
}

const reveals: Record<string, (el: HTMLElement) => void> = {
  lines: revealLines,
  words: revealWords,
  fade: revealFade,
  media: revealMedia,
};

export function initMotion() {
  document.documentElement.classList.add('js');
  if (reduceMotion) return;

  initSmoothScroll();

  document.fonts.ready.then(() => {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      reveals[el.dataset.reveal ?? '']?.(el);
    });
    document.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(parallax);
    ScrollTrigger.refresh();
  });
}

export { gsap, ScrollTrigger, reduceMotion };
