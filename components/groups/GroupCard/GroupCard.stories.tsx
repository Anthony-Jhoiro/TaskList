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
  group: {
    name: "Some group",
    id: "1234",
    created_at: "2022-02-22",
    user: {
      id: "1234",
      name: "John Doe",
      image: "/woman_1.jpg"
    }
  }
}
