import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {EmojiPicker, EmojiPickerProps} from "."

export default {
  title: "Component/EmojiPicker",
  component: EmojiPicker,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<EmojiPickerProps> = (_args) => <p>Story has been disabled for that component</p>

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
