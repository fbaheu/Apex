import React from 'react';

import { Menu } from '@apex/react/menu';
import { Link } from '@apex/react/link';

import type { Note } from '@apex/core/collections/note';
import { STATIC_CATEGORY } from '@apex/core/collections/category';

/**
 * [COMPONENT] NoteListItem
 * @description Define the note item displayed inside the notes list view.
 * @example
 * <caption>Example usage of **NoteListItem** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <NoteListItem {...note}  />
 *  );
 * };
 * ```
 *
 */
export const NoteListItem: React.FunctionComponent<Note> = ({ id, content }) => {
  return (
    <Link
      w="full"
      to="/$categoryId/$noteId"
      id="navigation-sidebar-menu-item"
      preload={false}
      params={prev => ({ ...prev, noteId: id })}
    >
      {({ isActive }) => (
        <Menu.Item {...(isActive && { 'data-link-active': 'true' })}>
          {JSON.stringify(content)}
        </Menu.Item>
      )}
    </Link>
  );
};
