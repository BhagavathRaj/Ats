import { Extension } from '@tiptap/react';
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

export const FontSize = Extension.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) =>
              element.style.fontSize.replace(/['"]+/g, ''),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});

const MyEditor = () => {
  const editor = useEditor({
    extensions: [FontSize],
    content: '<p>Hello, world!</p>', 
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <button onClick={() => editor.chain().setFontSize('20px').run()}>
        Set Font Size
      </button>
      <button onClick={() => editor.chain().unsetFontSize().run()}>
        Unset Font Size
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default MyEditor;