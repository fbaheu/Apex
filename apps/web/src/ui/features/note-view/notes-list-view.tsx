import type React from 'react';

import { For } from '@apex/react/for';

import { noteStore } from '~ui/stores/note-store';

import { NoteListItem } from './note-list-item';
import { NotesListContainer } from './notes-list-container';

export const NotesListView: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const notes = noteStore(s => s.notes);
  return (
    <NotesListContainer>
      <For each={notes}>
        {({ id, ...rest }) => (
          <NoteListItem
            key={id}
            id={id}
            {...rest}
          />
        )}
      </For>
    </NotesListContainer>
  );
};
