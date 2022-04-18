import {useState} from "react";
import {$getSelection, $isRangeSelection, GridSelection, NodeSelection, RangeSelection} from "lexical";

export interface ToolbarTheme {
  isBold: boolean,
  isItalic: boolean,
  isUnderline: boolean
}

function isRangeSelection (selection:  RangeSelection | NodeSelection | GridSelection | null): selection is RangeSelection {
  return $isRangeSelection(selection)
}

export function useEditorToolbarTheme(): [ToolbarTheme, () => void] {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const updateToolbar = () => {
    const selection = $getSelection();

    if (!selection) return;

    if (isRangeSelection(selection)){
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
    }
  }

  return [
    {isBold, isItalic, isUnderline},
    updateToolbar
  ]

}