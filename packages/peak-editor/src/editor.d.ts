import type { ReactEditor } from 'slate-react';
import type { BaseEditor, Path, Element, NodeEntry } from 'slate';

import type { CustomLeafElement } from '~leaf';

interface ExtendedEditor extends BaseEditor, ReactEditor {
  // insertEmptyParagraph(): void;
  // removeAllMarks(): void;
  // insertBlankSpace(): void;
  // inserNewline(): void;
  // getPathOfElement(element: Element): Path;
  // getCurrentNode(): NodeEntry | null;
}

declare module 'slate' {
  interface CustomTypes {
    Editor: ExtendedEditor;
    // Element: Elements;
    Text: CustomLeafElement;
  }
}
