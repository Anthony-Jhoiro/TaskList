import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {faBold, faItalic, faUnderline} from "@fortawesome/free-solid-svg-icons";
import {
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND
} from "lexical";
import {useEffect} from "react";
import {mergeRegister} from "@lexical/utils";
import {ToolbarTheme, useEditorToolbarTheme} from "./useEditorToolbarTheme";
import {ToolbarTab} from "./ToolbarTab";




const BoldToolbarTab = ({t, e}: { t: ToolbarTheme, e: LexicalEditor }) => ToolbarTab({
  isActive: t.isBold,
  fontAwesomeIcon: faBold,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"),
  label: 'Texte gras'
});

const ItalicToolbarTab = ({t, e}: { t: ToolbarTheme, e: LexicalEditor }) => ToolbarTab({
  isActive: t.isItalic,
  fontAwesomeIcon: faItalic,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"),
  label: 'Texte italique'
});

const UnderlineToolbarTab = ({t, e}: { t: ToolbarTheme, e: LexicalEditor }) => ToolbarTab({
  isActive: t.isUnderline,
  fontAwesomeIcon: faUnderline,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"),
  label: 'Texte souligné'
});


export const CustomEditorToolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [toolbarTheme, updateToolbar] = useEditorToolbarTheme();

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          updateToolbar();

        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          return true;
        },
        1
      )
    );
  }, [editor, updateToolbar])

  return (
    <div className={"w-full h-12 bg-gray-50 border-b-2 border-gray px-5 flex items-center gap-1"}>
      <BoldToolbarTab t={toolbarTheme} e={editor}/>
      <ItalicToolbarTab t={toolbarTheme} e={editor}/>
      <UnderlineToolbarTab t={toolbarTheme} e={editor}/>

    </div>
  )
}