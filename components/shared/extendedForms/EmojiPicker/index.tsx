import React from "react";
import Picker, {IEmojiPickerProps} from 'emoji-picker-react';


export type EmojiPickerProps = IEmojiPickerProps & {

}

export const EmojiPicker: React.VFC<EmojiPickerProps> = ({...options}: EmojiPickerProps) => {
  return <Picker {...options} />
}

export default EmojiPicker;