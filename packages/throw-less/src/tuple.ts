/**
 * [CLASS] Tuple
 * @description Define a tuple iterable instance to store two values.
 * @example
 * <caption>Example usage of **Tuple** class.</caption>
 *
 * ```typescript tsx
 * const tuple = new Tuple("left value", 12345);
 *
 * const [left, right] = tuple; // ["left value", 12345]
 * ```
 */
export class Tuple<Left, Right> {
  0: Left;
  1: Right;
  length: 2 = 2;

  constructor(readonly left: Left, readonly right: Right) {
    this[0] = left;
    this[1] = right;
  }

  at<At extends 0 | 1>(index: At) {
    return this[index];
  }

  protected isLeft(): this is [Left, Right];
  protected isLeft(): this is Tuple<Left, Right>;
  protected isLeft() {
    return Boolean(this[0]);
  }

  protected isRight(): this is [Left, Right];
  protected isRight(): this is Tuple<Left, Right>;
  protected isRight() {
    return Boolean(this[1]);
  }

  * [Symbol.iterator](): Generator<Left | Right, void, unknown> {
    yield* [this[0], this[1]];
  }
}
