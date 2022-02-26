import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskCreateButton, TaskCreateButtonProps} from "./index"

export default {
  title: "Tasks/TaskCreate",
  component: TaskCreateButton,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<TaskCreateButtonProps> = (args) => <TaskCreateButton {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
