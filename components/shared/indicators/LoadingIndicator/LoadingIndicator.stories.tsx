import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {LoadingIndicator, LoadingIndicatorDimention, LoadingIndicatorProps} from "./index"

export default {
  title: "Shared/Indicators/LoadingIndicator",
  component: LoadingIndicator,
  argTypes: {
    //...
  }
} as Meta;

const Template: Story<LoadingIndicatorProps> = (args) => <LoadingIndicator {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  label: "Hello World"
}

const sizes: LoadingIndicatorDimention[] = ['sm', 'md', 'lg', 'xl']

export const Show = () => (
  <div>
    {sizes.map(size => <LoadingIndicator key={`size_${size}`} size={size} label={`Size : ${size}`}/>)}
  </div>
)