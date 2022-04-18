import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {AddUserToGroupDialog, AddUserToGroupDialogProps} from "./index"

export default {
  title: "Tasks/AddUserToGroupDialog",
  component: AddUserToGroupDialog,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<AddUserToGroupDialogProps> = (args) => <AddUserToGroupDialog {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  open: true,
  closable: true
}
