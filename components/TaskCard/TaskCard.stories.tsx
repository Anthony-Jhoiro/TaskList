import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskCard, TaskCardProps} from "."

export default {
  title: "Component/TaskCard",
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
