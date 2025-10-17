import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  'fade-in': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },

  'fade-out': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  },

  'slide-in': {
    '0%': { opacity: 0, transform: 'translateY(64px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },

  'slide-out': {
    '0%': { opacity: 1, transform: 'translateY(0)' },
    '100%': { opacity: 0, transform: 'translateY(64px)' },
  },

  'slide-in-left': {
    '0%': { transform: 'translate(-100%)' },
    '100%': { transform: 'translate(0)' },
  },

  'slide-out-left': {
    '0%': { transform: 'translate(0)' },
    '100%': { transform: 'translate(-100%)' },
  },

  'slide-in-right': {
    '0%': { transform: 'translate(100%)' },
    '100%': { transform: 'translate(0)' },
  },

  'slide-out-right': {
    '0%': { transform: 'translate(0)' },
    '100%': { transform: 'translate(100%)' },
  },

  'skeleton-pulse': {
    '50%': { opacity: 0.5 },
  },
});
