import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {EmojiPicker, EmojiPickerProps} from "./index"

export default {
  title: "Shared/Actions/EmojiPicker",
  component: EmojiPicker,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<EmojiPickerProps> = (_args) => <EmojiPicker/>

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
