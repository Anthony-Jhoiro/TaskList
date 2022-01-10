import React, {useState} from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {Dialog, DialogProps, DialogTitle} from "."
import {Button} from "../Button";
import {faCheck, faCoffee, faTimes} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Component/Dialog",
  component: Dialog,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<DialogProps> = (args) => <Dialog {...args} />

const defaultBody = <div className={'divide-y grid-cols-1'}>
  <div className={'p-1 my-5'}>
    <p>I love wafer sesame snaps chupa chups caramels tart brownie I love jujubes. I love marshmallow topping I love
      bear claw jelly beans oat cake. I love pastry cake I love toffee gummi bears. Chupa chups dragée candy canes I
      love jelly croissant chocolate bar marzipan sweet roll. Sweet roll I love ice cream I love jelly beans candy canes
      macaroon bear claw. Croissant croissant bonbon marzipan jujubes I love tart tootsie roll chupa chups.</p>
  </div>
  <div className={'text-right mt-5 p-2'}>
    <Button variant={'SUCCESS'} className={'mx-2'} icon={faCheck}>Submit</Button>
    <Button variant={'SECONDARY'} className={'mx-2'} icon={faTimes}>Close</Button>
  </div>

</div>

// Default scenario
export const Default = Template.bind({})
Default.args = {
  children: <>
    <DialogTitle className={'text-primary'} closable={true}>Hello World !</DialogTitle>
    {defaultBody}
  </>,
  open: true,
  closable: true,
  'aria-label': 'Default Dialog'
}

export const Show = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
    <Dialog open={dialogOpened} onClose={() => setDialogOpened(false)} closable={true} aria-label={'Dynamic Dialog'}>
      <DialogTitle className={'text-primary'}>Hello World !</DialogTitle>
      <div className={'divide-y grid-cols-1'}>
        <div className={'p-1 my-5'}>
          <p>I love wafer sesame snaps chupa chups caramels tart brownie I love jujubes. I love marshmallow topping I love bear claw jelly beans oat cake. I love pastry cake I love toffee gummi bears. Chupa chups dragée candy canes I love jelly croissant chocolate bar marzipan sweet roll. Sweet roll I love ice cream I love jelly beans candy canes macaroon bear claw. Croissant croissant bonbon marzipan jujubes I love tart tootsie roll chupa chups.</p>
        </div>
        <div className={'text-right mt-5 p-2'}>
          <Button variant={'SUCCESS'} className={'mx-2'} icon={faCheck}>Submit</Button>
          <Button variant={'SECONDARY'} className={'mx-2'} icon={faTimes}  onClick={() => setDialogOpened(false)}>Close</Button>
        </div>

      </div>
    </Dialog>
      <Button icon={faCoffee} variant={'PRIMARY'} className={'m-2'} onClick={() => setDialogOpened(true)}>Open dialog</Button>

    </>
  )
}
