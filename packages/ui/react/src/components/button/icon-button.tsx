import { styled } from '@apex/design-system/jsx';

import { Button } from './button';

/**
 * [COMPONENT] Button - Icon
 * @description Define Icon Button component. Display a button with no label inside.
 * @example
 * <caption>Example usage of **IconButton** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <IconButton variant='outline' state='destructive'>
 *      <TrashIcon />
 *    </IconButton>
 *  );
 * };
 * ```
 *
 */
export const IconButton = styled(Button, {
  base: {
    _after: {
      content: '""',
      inset: '-1',
      position: 'absolute',
    }
  },

  variants: {
    size: {
      sm: {
        py: '1.5',
        px: '1.5',
      },
      md: {
        py: '2',
        px: '2',
      },
      lg: {
        py: '2.5',
        px: '2.5',
      },
      xl: {
        py: '2.5',
        px: '2.5',
      }
    },
  },

  defaultVariants: {
    size: 'md'
  }
});
