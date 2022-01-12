import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {FullScreenLoading, FullScreenLoadingProps} from "."

export default {
  title: "Component/FullScreenLoading",
  component: FullScreenLoading,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<FullScreenLoadingProps> = (args) => <FullScreenLoading {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
