import { gsap } from 'gsap';

/**
 * GSAP animation presets for consistent animations across the app
 */
export const animations = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.5, ease: 'power2.out' },
  },
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
  },
  fadeInDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
  },
  fadeInLeft: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
  },
  fadeInRight: {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
  },
  stagger: {
    each: 0.1,
    from: 'start' as const,
    ease: 'power2.out',
  },
};

/**
 * GSAP scroll trigger defaults
 */
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

/**
 * Register GSAP plugins (call in root layout or app)
 */
export function registerGSAPPlugins() {
  // Add ScrollTrigger and other plugins here when needed
  // gsap.registerPlugin(ScrollTrigger);
}

/**
 * Create a timeline with common defaults
 */
export function createTimeline(options?: gsap.TimelineVars) {
  return gsap.timeline({
    defaults: {
      ease: 'power3.out',
      duration: 0.6,
    },
    ...options,
  });
}
