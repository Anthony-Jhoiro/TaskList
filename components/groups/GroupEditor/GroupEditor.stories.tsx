import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {GroupEditor, GroupEditorProps} from "./index"

export default {
  title: "Groups/GroupEditor",
  component: GroupEditor,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<GroupEditorProps> = (args) => <GroupEditor {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
