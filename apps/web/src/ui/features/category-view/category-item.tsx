import React from 'react';
import { CircleIcon } from '@hugeicons/core-free-icons';

import { Link } from '@apex/react/link';
import { Menu } from '@apex/react/menu';
import { Span } from '@apex/react/styled-semantic-tag';
import { Icon, type IconSVGElement } from '@apex/react/icon';

import type { Category } from '@apex/core/collections/category';
import { useMatchRoute } from '@tanstack/react-router';

/**
 * [COMPONENT] CategoryItem
 * @description Define a single category item element.
 * @example
 * <caption>Example usage of **CategoryItem** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <CategoryItem  {...category} />
 *  );
 * };
 * ```
 *
 */
export const CategoryItem: React.FunctionComponent<Readonly<Category>> = ({ id, icon, label }) => {
  const match = useMatchRoute();

  return (
    <Link
      w="full"
      to="/$categoryId/$noteId"
      id="category-item"
      params={({ noteId }) => ({ categoryId: id, noteId: noteId ?? '' })}
    >
      <Menu.Item {...(match({ to: '/$categoryId', fuzzy: true, params: { categoryId: id } }) && { 'data-link-active': 'true' })}>
        <Span color="text.placeholder">
          <Icon
            size="xs"
            style={{ height: '4px', width: '4px', fill: 'currentcolor' }}
            icon={CircleIcon}
          />
        </Span>
        {label}
      </Menu.Item>
    </Link>
  );
};
