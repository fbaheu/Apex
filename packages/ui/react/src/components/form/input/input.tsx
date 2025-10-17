import type React from 'react';

import { Box } from '@apex/design-system/jsx';

import { IconButton } from '~components/button';

import { Element } from './element';
import { InputControlWrapper } from './input-control-wrapper';

/**
 * INTERFACE
 */
export interface InputProps extends React.ComponentProps<'input'> {
  invalid?: boolean;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  onClickReset?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * [COMPONENT] Input
 * @description Define a full input element.
 * @example
 * <caption>Example usage of **Input** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Input type="text" placeholder="Enter something" />
 *  );
 * };
 * ```
 *
 */
export const Input: React.FunctionComponent<InputProps> = ({
  invalid,
  leftSide,
  rightSide,
  onClickReset,
  ...props
}) => {
  const isInvalid = invalid ? { 'data-invalid': '\'true\'' } : {};

  return (
    <InputControlWrapper {...isInvalid}>
      <Element {...props} />
    </InputControlWrapper>
  );
};
