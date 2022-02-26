import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {CustomEditor, CustomEditorProps} from "./index"

export default {
  title: "Shared/Actions/CustomEditor",
  component: CustomEditor,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<CustomEditorProps> = (args) => <CustomEditor {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
