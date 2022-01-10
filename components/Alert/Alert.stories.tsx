import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Alert, AlertProps} from "."
import {AlertType} from "../../types/alerts";

export default {
  title: "Component/Alert",
  component: Alert,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

const variants: AlertType[] = ['INFO', 'SUCCESS', 'WARNING', 'ERROR'];

const defaultTitle = "Hello World !";

const defaultBody = <div>
  <p>Donut toffee cake <em>caramels</em> caramels. Lollipop pastry brownie caramels chocolate marshmallow. Toffee lemon drops
    toffee cake bear claw sesame snaps donut tart jelly-o.</p>
  <p>Ice cream cookie ice cream chocolate cake cake jelly beans. Cake gingerbread fruitcake shortbread donut cheesecake
    tiramisu cake. Croissant danish muffin <b>bonbon</b> pastry dragée dessert. Gummies pie liquorice caramels chocolate cake
    wafer caramels</p>
</div>

// Default scenario
export const Default = Template.bind({})
Default.args = {
  title: defaultTitle,
  children: defaultBody
}

export const Show = () => {
  return variants.map(variant => <div key={`alert_v_${variant}`} className={'m-1'}>
    <Alert alertType={variant} title={defaultTitle}  className={'max-w-2xl'} >{defaultBody}</Alert>
  </div>)
}
