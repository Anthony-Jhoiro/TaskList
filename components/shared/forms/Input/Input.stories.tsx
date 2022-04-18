import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Input, InputProps} from "./index"
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Shared/Forms/Input",
  component: Input,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  placeholder: "This is an input",
  id: "default-input",
  label: "This is an input",
  disabled: false,
  icon: faCoffee
}
