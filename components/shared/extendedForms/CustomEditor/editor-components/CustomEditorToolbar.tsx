import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {
  faAlignCenter, faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faUnderline
} from "@fortawesome/free-solid-svg-icons";
import {
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND
} from "lexical";
import {useEffect} from "react";
import {mergeRegister} from "@lexical/utils";
import {ToolbarTheme, useEditorToolbarTheme} from "./useEditorToolbarTheme";
import {ToolbarTab} from "./ToolbarTab";
import * as Separator from '@radix-ui/react-separator';


type DefinedToolBarTabProps = { t: ToolbarTheme, e: LexicalEditor };


const BoldToolbarTab = ({t, e}: DefinedToolBarTabProps) => ToolbarTab({
  isActive: t.isBold,
  fontAwesomeIcon: faBold,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"),
  label: 'Texte gras'
});

const ItalicToolbarTab = ({t, e}: DefinedToolBarTabProps) => ToolbarTab({
  isActive: t.isItalic,
  fontAwesomeIcon: faItalic,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"),
  label: 'Texte italique'
});

const UnderlineToolbarTab = ({t, e}: DefinedToolBarTabProps) => ToolbarTab({
  isActive: t.isUnderline,
  fontAwesomeIcon: faUnderline,
  dispatcher: () => e.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"),
  label: 'Texte souligné'
});

const AlignLeftToolbarTab = ({e}: DefinedToolBarTabProps) => ToolbarTab({
  fontAwesomeIcon: faAlignLeft,
  dispatcher: () => e.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left"),
  label: 'Texte à gauche'
});

const AlignRightToolbarTab = ({e}: DefinedToolBarTabProps) => ToolbarTab({
  fontAwesomeIcon: faAlignRight,
  dispatcher: () => e.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right"),
  label: 'Texte à droite'
});

const AlignCenterToolbarTab = ({e}: DefinedToolBarTabProps) => ToolbarTab({
  fontAwesomeIcon: faAlignCenter,
  dispatcher: () => e.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center"),
  label: 'Texte centré'
});

const AlignJustifyToolbarTab = ({e}: DefinedToolBarTabProps) => ToolbarTab({
  fontAwesomeIcon: faAlignJustify,
  dispatcher: () => e.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify"),
  label: 'Texte justifié'
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
    <div className={"w-full h-12 bg-gray-50 border-b-2 border-gray px-5 py-2 flex items-center gap-1"}>

      {/* Text style */}

      <BoldToolbarTab t={toolbarTheme} e={editor}/>
      <ItalicToolbarTab t={toolbarTheme} e={editor}/>
      <UnderlineToolbarTab t={toolbarTheme} e={editor}/>

      <Separator.Root decorative orientation="vertical" className={'mx-2 w-0.5 h-full bg-gray-500'} />

      {/* Text direction */}

      <AlignLeftToolbarTab t={toolbarTheme} e={editor}/>
      <AlignCenterToolbarTab t={toolbarTheme} e={editor}/>
      <AlignRightToolbarTab t={toolbarTheme} e={editor}/>
      <AlignJustifyToolbarTab t={toolbarTheme} e={editor}/>

    </div>
  )
}