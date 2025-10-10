import type { Fn } from '~interfaces';

/**
 * [SHARED] isFn
 * @description Validate argument is a function.
 * @example
 * <caption>Example usage of **isFn** method.</caption>
 *
 * ```typescript tsx
 * const fn = () => 'this is a callable function';
 * const notFn = 'this is not a callable function';
 *
 * console.log(isFn(fn)); // true
 * console.log(isFn(notFn)); // false
 * ```
 *
 */
export function isFn(fn: unknown): fn is Fn {
  return typeof fn === 'function';
}
