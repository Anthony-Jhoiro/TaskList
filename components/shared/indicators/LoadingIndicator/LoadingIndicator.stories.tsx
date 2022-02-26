import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {LoadingIndicator, LoadingIndicatorProps} from "./index"

export default {
  title: "Shared/Indicators/LoadingIndicator",
  component: LoadingIndicator,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<LoadingIndicatorProps> = (args) => <LoadingIndicator {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}