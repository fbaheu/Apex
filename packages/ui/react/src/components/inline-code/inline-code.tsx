import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] InlineCode
 * @description InlineCode component which display a code in inline mode.
 * @example
 * <caption>Example usage of **InlineCode** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => { *
 *  return (
 *    <InlineCode>
 *      @apex/peak-editor
 *    </InlineCode>
 *  );
 * };
 * ```
 *
 */
export const InlineCode = styled('code' as const, {
  base: {
    color: 'text',
    whiteSpace: 'pre',
    borderRadius: 'sm',
    bgColor: 'bg.subtle',
    alignItems: 'center',
    display: 'inline-flex',
    fontWeight: 'normal',
    fontFamily: 'token(fonts.display), token(fonts.mono)',
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
