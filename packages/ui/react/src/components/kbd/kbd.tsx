import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Kbd
 * @description Keyboard component which display a keyboard command.
 * @example
 * <caption>Example usage of **Kbd** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => { *
 *  return (
 *    <Kbd>
 *      ctrl + s
 *    </Kbd>
 *  );
 * };
 * ```
 *
 */
export const Kbd = styled('kbd' as const, {
  base: {
    color: 'text',
    whiteSpace: 'pre',
    borderRadius: 'sm',
    bgColor: 'bg.subtle',
    alignItems: 'center',
    display: 'inline-flex',
    fontWeight: 'normal',
    fontFamily: 'token(fonts.display), token(fonts.mono)',
    boxShadow: '0 -2px 0 0 inset token(colors.border.muted), 0 0 0 1px inset token(colors.border.muted)',

  },

  variants: {
    size: {
      sm: {
        px: '0.5',
        minH: '5',
        textStyle: 'caption-lg',
      },
      md: {
        px: '1',
        py: '1px',
        minH: '6',
        textStyle: 'paragraph',
      },
      lg: {
        px: '1.5',
        py: '1px',
        minH: '7',
        textStyle: 'paragraph-lg',
      },
    }
  },

  defaultVariants: {
    size: 'md'
  }
});
