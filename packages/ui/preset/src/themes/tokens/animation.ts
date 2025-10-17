import { defineTokens } from '@pandacss/dev';

export const animations = defineTokens.animations({
  'backdrop-in': { value: 'fade-in .25s {easings.emphasized-in}' },
  'backdrop-out': { value: 'fade-out .2s {easings.emphasized-out}' },
  'dialog-in': { value: 'slide-in .4s {easings.emphasized-in}' },
  'dialog-out': { value: 'slide-out .2s {easings.emphasized-out}' },
  'drawer-in-left': {
    value: 'slide-in-left .4s {easings.emphasized-in}',
  },
  'drawer-out-left': {
    value: 'slide-out-left .2s {easings.emphasized-out}',
  },
  'drawer-in-right': {
    value: 'slide-in-right .4s {easings.emphasized-in}',
  },
  'drawer-out-right': {
    value: 'slide-out-right .2s {easings.emphasized-out}',
  },
  'skeleton-pulse': {
    value: 'skeleton-pulse 2s {easings.pulse} infinite',
  },
  'fade-in': { value: 'fade-in .15s {easings.emphasized-in}' },
  'fade-out': { value: 'fade-out .15s {easings.emphasized-out}' },
});

export const easings = defineTokens.easings({
  'pulse': { value: 'cubic-bezier(.4,0,.6,1)' },
  'default': { value: 'cubic-bezier(.2,0,0,1)' },
  'emphasized-in': { value: 'cubic-bezier(.05, .7, .1, 1)' },
  'emphasized-out': { value: 'cubic-bezier(.3, 0, .8, .15)' },
});

export const durations = defineTokens.durations({
  none: { value: '0ms' },
  fastest: { value: '50ms' },
  faster: { value: '.1s' },
  fast: { value: '.15s' },
  normal: { value: '.2s' },
  slow: { value: '.3s' },
  slower: { value: '.4s' },
  slowest: { value: '.5s' },
});
