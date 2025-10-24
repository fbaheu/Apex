import { Editor } from 'slate';

/**
 * CONSTANTS
 */
export const Format = {
  Bold: 'bold',
  Italic: 'italic',
  Underlined: 'underlined',
  Strike_Trough: 'strike_through',
  Sub_Script: 'subscript',
  Super_Script: 'superscript',
  Inline_Code: 'inline_code',
  // 'placeholder' and 'Title' are only meant for internal purpose.
  Placeholder: 'is_placeholder',
  Title: 'is_title'
} as const satisfies Record<string, string>;

/**
 * INTERFACE
 */
export type Format = typeof Format[keyof typeof Format];

export function isFormatActive(editor: Editor, format: Format) {
  // retrieve current mark
  const marks = Editor.marks(editor);

  switch (format) {
    case Format.Bold:
      return marks?.[Format.Bold] || false;
    case Format.Italic:
      return marks?.[Format.Italic] || false;
    case Format.Underlined:
      return marks?.[Format.Underlined] || false;
    case Format.Strike_Trough:
      return marks?.[Format.Strike_Trough] || false;
    case Format.Inline_Code:
      return marks?.[Format.Inline_Code] || false;
    case Format.Sub_Script:
      return marks?.[Format.Sub_Script] || false;
    case Format.Super_Script:
      return marks?.[Format.Super_Script] || false;
    default:
      return false;
  }
}

export function toggleFormat(editor: Editor, format: Format) {
  const isActive = isFormatActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  }
  else {
    Editor.addMark(editor, format, true);
  }
}
