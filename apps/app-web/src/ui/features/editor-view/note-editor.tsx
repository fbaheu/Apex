import React from 'react';

import { PeakEditor } from '@apex/peak-editor';
import { useDispatcher } from '@apex/dispatcher';
import { useDebounce } from '~ui/hooks/use-debounce';

export const NoteEditor: React.FunctionComponent = () => {
  // [HOOK] useDebounce - Debounce database saving when user is typing
  const { wait, clear } = useDebounce();
  // [HOOK] useDispatcher - Dispatch a new action
  const { dispatch } = useDispatcher();

  const handleEditorChange: React.ComponentProps<typeof PeakEditor>['onEditorChange'] = (newContent) => {
    clear();

    wait(async () => {
      await dispatch('create-new-note');
    });
  };

  return (
    <React.Fragment>
      <PeakEditor onEditorChange={handleEditorChange} />
    </React.Fragment>
  );
};
