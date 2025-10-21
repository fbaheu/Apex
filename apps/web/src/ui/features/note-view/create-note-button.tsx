import React from 'react';
import { FileAddIcon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/icon';
import { IconButton } from '@apex/react/button';
import { useDispatcher } from '@apex/dispatcher';

import { noteStore } from '~ui/stores/note-store';

export const CreateNoteButton: React.FunctionComponent = () => {
  const { dispatch } = useDispatcher();

  const handleButtonClick: React.MouseEventHandler<'button'> = async () => {
    const result = await dispatch('create-new-note');

    if (result.isSuccess()) {
      // TODO: Redirect to newly created note
      noteStore.getState().refresh();
    }
  };

  return (
    <IconButton onClick={handleButtonClick}>
      <Icon
        size="sm"
        icon={FileAddIcon}
      />
    </IconButton>
  );
};
