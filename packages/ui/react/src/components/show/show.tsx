import type React from 'react';

/**
 * INTERFACE
 */
export interface ShowProps<Condition> {
  when: Condition | boolean | null | undefined;
  fallback?: React.ReactNode;
}

/**
 * [COMPONENT] Show
 * @description When condition is met, display the children content, otherwise the fallback (or nothing) will be displayed.
 * @see {@link https://github.com/omnifed/cerberus/blob/cfb14ef26a6831c6faf1158a78c7bdb524e55fb6/packages/react/src/components/show/show.tsx|Cerberus} for inspiration.
 * @example
 * <caption>Example usage of **For** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *   <Show when={age > 18}>
 *    <span>Displayed when condition is met.</span>
 *   </Show>
 *  );
 * };
 * ```
 *
 */
export const Show = <Condition extends any>(props: React.PropsWithChildren<ShowProps<Condition>>) => {
  if (props.when) {
    return props.children;
  }

  if (props.fallback) {
    return props.fallback;
  }

  return null;
};
