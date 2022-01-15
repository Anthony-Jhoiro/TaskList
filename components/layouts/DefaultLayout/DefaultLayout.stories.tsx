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

const Template: Story<DefaultLayoutProps> = (_) => <DefaultLayout><h1>Hello World !</h1></DefaultLayout>

// Default scenario
export const Default = Template.bind({})
Default.args = {
}
