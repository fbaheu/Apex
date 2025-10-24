import React from 'react';
import { useMatchRoute } from '@tanstack/react-router';

import { Menu } from '@apex/react/menu';
import { Link } from '@apex/react/link';

import type { Note } from '@apex/core/collections/note';

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
  const match = useMatchRoute();

  return (
    <Link
      w="full"
      to="/$categoryId/$noteId"
      id="navigation-sidebar-menu-item"
      params={prev => ({ ...prev, noteId: id })}
    >
      <Menu.Item
        maxH="200px"
        overflow="hidden"
        {...(match({ to: '/$categoryId/$noteId', fuzzy: true, params: { noteId: id } }) && { 'data-link-active': 'true' })}
      >
        {JSON.stringify(content)}
      </Menu.Item>
    </Link>
  );
};
