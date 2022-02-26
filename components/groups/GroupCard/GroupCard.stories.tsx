import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {GroupCard, GroupCardProps} from "./index"

export default {
  title: "Groups/GroupCard",
  component: GroupCard,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<GroupCardProps> = (args) => <GroupCard {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  //...
}
