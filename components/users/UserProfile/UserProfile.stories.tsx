import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {UserProfile, UserProfileProps} from "."

export default {
  title: "Users/UserProfile",
  component: UserProfile,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<UserProfileProps> = (args) => <UserProfile {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  user: {
      id: "1234",
      name: "John Doe",
      image: "/woman_1.jpg"
  },
  imageOnly: false
}
