import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Checkbox, CheckboxProps} from "."

export default {
  title: "Component/Checkbox",
  component: Checkbox,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  label: 'Vim is underrated',
  defaultChecked: true,
  disabled: true

}
