import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {NavBar, NavBarProps} from "."

export default {
  title: "Component/NavBar",
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

// export const Show = () => {
//   return variants.map(variant => <div key={`alert_v_${variant}`} className={'m-1'}>
//     <Alert alertType={variant} title={defaultTitle}  className={'max-w-2xl'} >{defaultBody}</Alert>
//   </div>)
// }
