import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskCard, TaskCardProps} from "./index"

export default {
  title: "Tasks/TaskCard",
  component: TaskCard,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<TaskCardProps> = (args) => <TaskCard {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
