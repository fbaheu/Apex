import { Fail, fail, success, Success, type ThrowLess } from '~throw-less';

/**
 * INTERFACE
 */
export type Fn = (...args: readonly any[]) => any;

export type FnThrowLessResult<F extends Fn> = ReturnType<F> extends Promise<infer _R>
  ? Promise<ThrowLess<unknown, _R>>
  : ThrowLess<unknown, ReturnType<F>>;

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

/**
 * [SHARED] isPromise
 * @description Validate argument is a Promise.
 * @example
 * <caption>Example usage of **isPromise** method.</caption>
 *
 * ```typescript tsx
 * const promise = Promise.resolve('this is a promise');
 * const notPromise = 'this is not a promise';
 *
 * console.log(isPromise(promise)); // true
 * console.log(isPromise(notPromise)); // false
 * ```
 *
 */
export function isPromise(
  promise: unknown,
): promise is Promise<Awaited<typeof promise>> {
  return promise instanceof Promise;
}

/**
 * [SHARED] isThrowLess
 * @description Argument is already an instance of Success or Fail.
 * @example
 * <caption>Example usage of **isThrowLess** method.</caption>
 *
 * ```typescript tsx
 * const isSuccess = new Success('this is a promise');
 * const notAnInstance = 'this is not a promise';
 *
 * console.log(isThrowLess(isSuccess)); // true
 * console.log(isThrowLess(notAnInstance)); // false
 * ```
 *
 */
export function isThrowLess(result: unknown): result is ThrowLess<unknown, unknown> {
  return result instanceof Success || result instanceof Fail;
}

/**
 * [SHARED] fromThrowable
 * @description Encapsulate a function call which can throw an error by returning a Success or Fail.
 * @example
 * <caption>Example usage of **fromThrowable** method.</caption>
 *
 * ```typescript tsx
 * const fn = () => "simple function"
 *
 * const result = fromThrowable(fn);
 *
 * if (result.isSuccess()) {
 *  // Do something on success
 * }
 * ```
 *
 */
export function fromThrowable<
  F extends Fn,
  R = FnThrowLessResult<F>
>(fn: F): R {
  if (!isFn(fn)) {
    return fail(123) as R;
  }

  try {
    const result = fn();

    if (isPromise(result)) {
      result.then(resolved => isThrowLess(resolved) ? resolved : success(resolved))
        .catch(rejected => isThrowLess(rejected) ? rejected : fail(rejected));
    }

    if (isThrowLess(result)) {
      return result as R;
    }

    return success(result) as R;
  }
  catch (error) {
    return fail(error) as R;
  }
}
