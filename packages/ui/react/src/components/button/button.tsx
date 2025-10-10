import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Button
 * @description Define a Button component.
 * @example
 * <caption>Example usage of **Button** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Button variant='outline' state='destructive'>
 *      <TrashIcon />
 *      Remove
 *    </Button>
 *  );
 * };
 * ```
 *
 */
export const Button = styled('button' as const, {
  base: {
    alignItems: 'center',
    appearance: 'none',
    boxShadow: 'xs',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'token(fonts.display), token(fonts.mono)',
    fontWeight: 'normal',
    gap: '2',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'color, background-color, border-color, box-shadow, transform',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    zIndex: 'base',

    _open: {
      outline: '',
      outlineOffset: '',
    },

    _active: {
      transform: 'scale(0.97)'
    },

    _focusVisible: {
      outline: '',
      outlineOffset: '',
    },
  },

  variants: {
    size: {
      sm: {
        py: '2',
        px: '4',
        borderRadius: 'md',
        textStyle: 'caption-lg',
      },
      md: {
        py: '2',
        px: '4',
        borderRadius: 'md',
        textStyle: 'paragraph',
      },
      lg: {
        py: '2.5',
        px: '5',
        borderRadius: 'md',
        textStyle: 'paragraph',
      },
      xl: {
        py: '2.5',
        px: '6',
        borderRadius: 'lg',
        textStyle: 'paragraph',
      }
    },

    state: {
      base: {},
      accent: {},
      destructive: {}
    },

    variant: {
      filled: {
        _disabled: {
          opacity: '95',
          bgColor: 'bg.disabled',
          color: 'text.disabled',

          _hover: {
            bgColor: 'bg.disabled',
            color: 'text.disabled',

            _open: {
              bgColor: 'bg.disabled',
              color: 'text.disabled',
            },
          },
        },
      },
      outlined: {
        _disabled: {
          opacity: '95',
          bgColor: 'bg.disabled',
          color: 'text.disabled',
          borderColor: 'border.disabled',

          _hover: {
            bgColor: 'bg.disabled',
            color: 'text.disabled',

            _open: {
              bgColor: 'bg.disabled',
              color: 'text.disabled',
            },
          },
        },
      },
      ghost: {
        _disabled: {
          opacity: '95',
          bgColor: 'transparent',
          borderColor: 'border.disabled',

          _hover: {
            bgColor: 'bg.disabled',
            color: 'text.disabled',

            _open: {
              bgColor: 'bg.disabled',
              color: 'text.disabled',
            },
          },
        },
      }
    },
  },

  compoundVariants: [
    // STATE = 'base'
    // VARIANT = 'filled'
    {
      state: 'base',
      variant: 'filled',
      css: {
        bgColor: 'fg.muted',
        color: 'text.reversed',

        _hover: {
          bgColor: 'fg',

          _open: {
            bgColor: 'fg',
          },
        },

        _focusVisible: {
          bgColor: 'fg.muted',
        },
      }
    },
    // STATE = 'base'
    // VARIANT = 'outlined'
    {
      state: 'base',
      variant: 'outlined',
      css: {
        color: 'text',
        bgColor: 'bg',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',

        _hover: {
          bgColor: 'bg.subtle',
          borderColor: 'border.muted',

          _open: {
            bgColor: 'transparent',
          },
        },

        _focusVisible: {
          bgColor: 'transparent',
        },
      }
    },
    // STATE = 'base'
    // VARIANT = 'ghost'
    {
      state: 'base',
      variant: 'ghost',
      css: {
        boxShadow: 'unset',
        bgColor: 'bg.canvas',
        color: 'text.secondary',

        _hover: {
          bgColor: 'bg.subtle',

          _open: {
            bgColor: 'bg.canvas',
          },
        },

        _focusVisible: {
          bgColor: 'bg.canvas',
        },
      }
    },
  ],

  defaultVariants: {
    size: 'md',
    state: 'base',
    variant: 'filled'
  }
});
