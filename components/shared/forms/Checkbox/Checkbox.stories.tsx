import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Checkbox, CheckboxProps} from "./index"

export default {
  title: "Shared/Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

const DEFAULT_LABEL = "Vim is underrated";

// Default scenario
export const Default = Template.bind({})
Default.args = {
  label: DEFAULT_LABEL,
  defaultChecked: true,
  disabled: false
}

export const Show = () => <div>
  <p>Enabled</p>
  <Checkbox defaultChecked={false} disabled={false} label={DEFAULT_LABEL} />
  <br/>
  <Checkbox defaultChecked={true} disabled={false} label={DEFAULT_LABEL} />
  <br/>
  <p>Disabled</p>
  <Checkbox defaultChecked={false} disabled={true} label={DEFAULT_LABEL} />
  <br/>

  <Checkbox defaultChecked={true} disabled={true} label={DEFAULT_LABEL} />
</div>


