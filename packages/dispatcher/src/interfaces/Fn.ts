import type { DispatchContext } from './DispatcherBuilder';

/**
 * INTERFACE
 */
export type Fn = (...args: readonly any[]) => any;

export type FnAction = (ctx: DispatchContext, ...args: readonly any[]) => any;
