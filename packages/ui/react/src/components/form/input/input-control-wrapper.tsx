import { Box, styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] InputControlWrapper
 * @description Element which will wrap every form control to ensure styling across all app.
 * @example
 * <caption>Example usage of **InputControlWrapper** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *  <InputControlWrapper>
 *    ...
 *  </InputControlWrapper>
 *  );
 * };
 * ```
 *
 */
export const InputControlWrapper = styled(Box, {
  base: {
    flex: '1',
    minWidth: 0,
    color: 'text',
    appearance: 'none',
    outline: 'none',
    position: 'relative',
    borderRadius: 'md',
    display: 'inline-flex',
    alignItems: 'center',
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    borderWidth: 'thin',
    textStyle: 'caption-lg',
    transitionDuration: 'normal',
    transitionProperty: 'outline, box-shadow',
    transitionTimingFunction: 'default',

    _focusWithin: {
      boxShadow: 'focus-accent',
    },

    '&:has(input[data-popup-open])': {
      boxShadow: 'focus-accent',
    },

    '&:disabled, &:has(input[disabled])': {
      opacity: '40',
      bgColor: 'bg.subtle',
      cursor: 'not-allowed',
      pointerEvents: 'none',

      borderColor: 'border',

      _hover: {
        borderColor: 'border.disabled',
      },
    },

    '&[data-invalid], &:has(~ * input[data-invalid])': {
      boxShadow: 'focus-danger',

      _hover: {
        boxShadow: 'focus-danger',
      },

      _focusWithin: {
        boxShadow: 'focus-danger',
      },
    },
  },
});
