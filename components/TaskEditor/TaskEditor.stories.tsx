import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskEditor, TaskEditorProps} from "."

export default {
  title: "Component/TaskEditor",
  component: TaskEditor,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<TaskEditorProps> = (args) => <TaskEditor {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
