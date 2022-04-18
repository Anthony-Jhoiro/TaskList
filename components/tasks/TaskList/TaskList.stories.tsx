import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskList, TaskListProps} from "./index"

export default {
  title: "Tasks/TaskList",
  component: TaskList,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
