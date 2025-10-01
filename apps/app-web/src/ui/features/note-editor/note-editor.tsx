import React from 'react';

import { PeakEditor } from '@apex/peak-editor';

export const NoteEditor: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <PeakEditor onEditorChange={console.log} />
    </React.Fragment>
  );
};
