import React from "react";
import LexicalComposer from '@lexical/react/LexicalComposer';
import LexicalRichTextPlugin from '@lexical/react/LexicalRichTextPlugin';
import LexicalContentEditable from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {EditorThemeClasses} from 'lexical';
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {CustomEditorToolbar} from "./editor-components/CustomEditorToolbar";

export interface CustomEditorProps {
  blocks: any,
  readonly: boolean,

  [key: string]: any
}

const theme: EditorThemeClasses = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline'
  }
}

function onError(error: any) {
  console.error(error);
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
// function onChange(editorState: any) {
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot();
//     const selection = $getSelection();
//   });
// }

export const CustomEditor: React.VFC<CustomEditorProps> = ({
                                                             blocks = {},
                                                             readonly = false,
                                                             ...reactEditorOptions
                                                           }: CustomEditorProps) => {

  // const ReactEditorJS: any = createReactEditorJS()

  const initialConfig = {
    theme,
    onError,
    nodes: [
      HeadingNode,
      QuoteNode,
    ]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={'bg-white rounded-2xl overflow-hidden'}>

        {/* Toolbar */}
        <CustomEditorToolbar />

        <div className={'no-child-outline relative p-3 h-64'}>

          <LexicalRichTextPlugin
            contentEditable={<LexicalContentEditable />}
            placeholder={<div
              className={'top-3 left-3 pointer-events-none absolute overflow-hidden text-gray-400'}>Enter
              some text...</div>}
          />
          {/*<LexicalOnChangePlugin/>*/}
          <HistoryPlugin/>
        </div>
      </div>

    </LexicalComposer>
  );


  // return (
  //   <div className={"text-left bg-white custom-editor pt-3"}>
  //     <Twemoji options={{ className: 'twemoji' }} >
  //     <ReactEditorJS defaultValue={blocks} tools={EDITOR_JS_TOOLS} readOnly={readonly}
  //                    placeholder={"Que souhaites-tu raconter ?"} {...reactEditorOptions} />
  //     </Twemoji>
  //   </div>
  // )
}

export default CustomEditor;
