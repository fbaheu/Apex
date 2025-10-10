import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';

/**
 * CONSTANTS
 */
export const IconSize = {
  xs: 18,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
} as const;

/**
 * INTERFACE
 */
export type IconSVGElement = IconSvgElement;

export interface IconProps extends React.ComponentProps<typeof HugeiconsIcon> {
  size?: keyof typeof IconSize;
}

/**
 * [COMPONENT] Icon
 * @description Icon component which encapsulate the **HugeiconsIcon** component exposed by [@hugeicons/react](https://github.com/hugeicons/react)
 * @example
 * <caption>Example usage of **Icon** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *   <Icon size="sm" icon={ ... } />
 *  );
 * };
 * ```
 *
 */
export const Icon: React.FunctionComponent<Readonly<IconProps>> = (props) => {
  return (
    <HugeiconsIcon
      {...props}
      size={IconSize[props.size ?? 'md']}
    />
  );
};
