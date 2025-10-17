import React from 'react';
import { useLoaderData, useNavigate, useParams } from '@tanstack/react-router';

import { PeakEditor } from '@apex/peak-editor';
import { useDispatcher } from '@apex/dispatcher';

import { useDebounce, LONG_TIMEOUT_TIMER } from '~ui/hooks/use-debounce';

export const Note: React.FunctionComponent = () => {
  // [HOOK] useLoaderData - retrieve note data based on currently active in route params
  const note = useLoaderData({ strict: false });
  // [HOOK] useParams - Get the note id from URL params
  const { noteId } = useParams({ strict: false });
  // [HOOK] useDebounce - Debounce database saving when user is typing
  const { wait, clear } = useDebounce(LONG_TIMEOUT_TIMER);
  // [HOOK] useDispatcher - Dispatch a new action
  const { dispatch } = useDispatcher();

  const handleEditorChange: React.ComponentProps<typeof PeakEditor>['onEditorChange'] = (newContent) => {
    clear();

    wait(async () => dispatch('update-note-content', noteId, newContent));
  };

  return (
    <React.Fragment>
      <PeakEditor
        key={noteId}
        defaultEditorValue={note?.content}
        onEditorChange={handleEditorChange}
      />
    </React.Fragment>
  );
};
