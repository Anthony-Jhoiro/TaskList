import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Button, ButtonProps, ButtonVariant} from "./index"
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Shared/Actions/Button",
  component: Button,
  argTypes: {}
} as Meta;

const variants: ButtonVariant[] = ['PRIMARY', 'SECONDARY', 'TERTIARY', 'DISABLED']

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  children: 'Hello World'
}

export const Show = () => {
  return variants.map(v => (
    <div key={`btn_var_${v}`} className={'flex items-center'}>
      <p className={'w-32'}>{v}</p>
      <Button variant={v} className={'m-1'}>Hello World !</Button>
      <Button variant={v} className={'m-1'} icon={faCoffee}>Hello World !</Button>
    </div>))
};
