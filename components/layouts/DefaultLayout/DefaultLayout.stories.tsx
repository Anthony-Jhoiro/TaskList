import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {DefaultLayout, DefaultLayoutProps} from "."

export default {
  title: "Layouts/DefaultLayout",
  component: DefaultLayout,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<DefaultLayoutProps> = (_) => <p>Story has been disabled for that component</p>

// Default scenario
export const Default = Template.bind({})
Default.args = {
}
