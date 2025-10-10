import { styled } from '@apex/design-system/jsx';
import { createLink } from '@tanstack/react-router';

/**
 * [COMPONENT] Link
 * @description Link component which display a single link element.
 * @example
 * <caption>Example usage of **Link** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => { *
 *  return (
 *    <Link>
 *      ctrl + s
 *    </Link>
 *  );
 * };
 * ```
 *
 */
export const Link = createLink(styled('a' as const));
