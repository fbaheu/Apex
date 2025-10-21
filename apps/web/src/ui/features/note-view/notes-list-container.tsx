import type React from 'react';

import { Menu } from '@apex/react/menu';

export const NotesListContainer: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  return (
    <Menu
      px="3"
      overflowY="auto"
      id="notes-list-container"
    >
      {children}
    </Menu>
  );
};
