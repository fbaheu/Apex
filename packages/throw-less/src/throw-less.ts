import { Tuple } from '~tuple';





/**
 * INTERFACE
 */
export type ThrowLess<F, R> = Fail<F, R> | Success<F, R>;

/**
 * [CLASS] Success
 * @description Define a success instance to tell the right part of tuple is filled).
 * @example
 * <caption>Example usage of **Success** class.</caption>
 *
 * ```typescript tsx
 * const tuple = new Success("success value");
 *
 * if (tuple.isSuccess()) {
 *  console.log(tuple.at(1)); // "success value"
 * }
 * ```
 */
export class Success<Error, Result> extends Tuple<Error | undefined, Result> {
  constructor(readonly data: Result) {
    super(undefined, data);
  }

  isSuccess(): this is [undefined, Result];
  isSuccess(): this is Tuple<undefined, Result>;
  isSuccess(): this is Success<undefined, Result>;
  isSuccess() {
    return this.isRight();
  }

  isFail(): this is [Error, undefined];
  isFail(): this is Tuple<Error, undefined>;
  isFail(): this is Fail<Error, undefined>;
  isFail() {
    return !this.isSuccess();
  }
}

/**
 * [CLASS] Fail
 * @description Define a fail instance to tell the left part of tuple is filled).
 * @example
 * <caption>Example usage of **Fail** class.</caption>
 *
 * ```typescript tsx
 * const tuple = new Fail("failed value");
 *
 * if (tuple.isFail()) {
 *  console.log(tuple.at(0)); // "failed value"
 * }
 * ```
 */
export class Fail<Error, Result> extends Tuple<Error, Result | undefined> {
  constructor(readonly error: Error) {
    super(error, undefined);
  }

  isSuccess(): this is [undefined, Result];
  isSuccess(): this is Tuple<undefined, Result>;
  isSuccess(): this is Success<undefined, Result>;
  isSuccess() {
    return this.isLeft();
  }

  isFail(): this is [Error, undefined];
  isFail(): this is Tuple<Error, undefined>;
  isFail(): this is Fail<Error, undefined>;
  isFail() {
    return !this.isSuccess();
  }
}

/**
 * [UTIL] success
 * @description Define a method which return a Success instance.
 * @example
 * <caption>Example usage of **success** method.</caption>
 *
 * ```typescript tsx
 * function divide(a: number, b: number) {
 *  if (b === 0) {
 *    return fail('Not divisible by 0');
 *  }
 *
 *  return success(a / b);
 * }
 *
 * const result = test(1, 2);
 *
 * if (result.isFail()) {
 *  console.log(result.at(0)); // 'Not divisible by 0'
 * }
 *
 * if (result.ifSuccess()) {
 *  console.log(result.at(1)); // 0.5
 * }
 * ```
 */
export function success<F, S = never>(success: S): Success<F, S>;
export function success<F extends void = void, S = never>(success: void): Success<void, S>;
export function success<F, S = never>(success: S): Success<F, S> {
  return new Success(success);
}

/**
 * [UTIL] fail
 * @description Define a method which return a Fail instance.
 * @example
 * <caption>Example usage of **fail** method.</caption>
 *
 * ```typescript tsx
 * function divide(a: number, b: number) {
 *  if (b === 0) {
 *    return fail('Not divisible by 0');
 *  }
 *
 *  return success(a / b);
 * }
 *
 * const result = test(1, 2);
 *
 * if (result.isFail()) {
 *  console.log(result.at(0)); // 'Not divisible by 0'
 * }
 *
 * if (result.ifSuccess()) {
 *  console.log(result.at(1)); // 0.5
 * }
 * ```
 */
export function fail<F = never, S extends string = string>(error: F): Fail<F, S>;
export function fail<F = never, S = unknown>(error: F): Fail<F, S>;
export function fail<F = never, S extends void = void>(error: void): Fail<F, void>;
export function fail<F = never, S = unknown>(error: F): Fail<F, S> {
  return new Fail(error);
}
