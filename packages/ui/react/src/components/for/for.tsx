import React from 'react';

/**
 * INTERFACE
 */
export interface ForProps<A extends Array<unknown>, E extends React.JSX.Element> {
  each: A;
  fallback?: React.JSX.Element;
  children(element: A[number], index: number): E;
}

/**
 * [COMPONENT] For
 * @description Component to iterate easily over an array with a fallback props when array is not defined or empty.
 * @see {@link https://docs.solidjs.com/reference/components/for|Solidjs} and {@link https://github.com/omnifed/cerberus/blob/cfb14ef26a6831c6faf1158a78c7bdb524e55fb6/packages/react/src/components/for/for.tsx|Cerberus} for inspiration.
 * @example
 * <caption>Example usage of **For** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *   <For each={[1, 2, 3]}>
 *    {
 *      (element, index) => <span key={index}>{element}</span>
 *    }
 *   </For>
 *  );
 * };
 * ```
 *
 */
export const For = <A extends Array<unknown>, E extends React.JSX.Element>({ each, fallback, children }: ForProps<A, E>) => {
  // Current array is not defined or empty
  const isEmpty = !each || !each.length;

  if (isEmpty) {
    return fallback ?? <React.Fragment />;
  }

  return each.map(children);
};
