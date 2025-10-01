import React from 'react';

/**
 * CONSTANTS
 */
export const DEFAULT_TIMEOUT_TIMER = 200; // 200 milliseconds

export const NORMAL_TIMEOUT_TIMER = 1_000; // 1 second

export const LONG_TIMEOUT_TIMER = 1_500; // 1.5 seconds

/**
 * INTERFACE
 */
type Callable = (...args: any) => any;

/**
 * [HOOK] useDebounce
 * @description Hook to debounce a value.
 * @example
 * <caption>Example usage of **useDebounce** hook.</caption>
 *
 * ```typescript jsx
 *  const Component = () => {
 *  const { wait, clear } = useDebounce();
 *
 *  const onClick = () => {
 *    clear();
 *
 *    wait(() => console.log('Hey !'));
 *  }
 *
 *  render (
 *    <button type='button' onClick={onClick} />
 *  );
 * ```
 *
 */
export function useDebounce(timer = DEFAULT_TIMEOUT_TIMER) {
  // [REF] useRef - Track current timeout
  const timeout = React.useRef<number>(undefined);

  /**
   * [HANDLER] clear
   * @description Clear previous timeout and reset current state to undefined.
   */
  const clear = () => {
    clearTimeout(timeout.current);
    timeout.current = undefined;
  };

  /**
   * [HANDLER] wait
   * @description Wait an amount of time and execute callable
   */
  const wait = (cb: Callable) => {
    if (typeof cb !== 'function') {
      return; // do nothing
    }

    timeout.current = setTimeout(cb, timer);
  };

  /**
   * [HOOK] useEffect
   * @description Clear (remove) the timeout whenever the component unmount.
   */
  React.useEffect(() => {
    return clear;
  }, []);

  return { clear, wait } as const;
}
