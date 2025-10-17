import { Field as BaseField } from '@base-ui-components/react/field';

import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Field - Label
 * @description Label component for field (form).
 * @example
 * <caption>Example usage of **Label** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Label>
 *      ...
 *    </Label>
 *  );
 * };
 * ```
 *
 */
export const Label = styled(BaseField.Label, {
  base: {
    gap: '1',
    color: 'text',
    alignItems: 'center',
    position: 'relative',
    fontWeight: 'normal',
    display: 'inline-flex',
    textStyle: 'caption-lg',
  },
});
