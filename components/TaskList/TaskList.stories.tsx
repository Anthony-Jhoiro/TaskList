import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskList, TaskListProps} from "."

export default {
  title: "Component/TaskList",
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
