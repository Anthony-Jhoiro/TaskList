import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {NavBar, NavBarProps} from "./index"

export default {
  title: "Shared/Navigation/NavBar",
  component: NavBar,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  user: {
    name: 'Jhonny',
    image: '/woman_1.jpg',
    id: '',

  }
}
