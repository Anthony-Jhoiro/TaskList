import React, {useState} from "react";
import {Input} from "../Input";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button";


export interface GroupEditorProps {
  onSubmit: (group: { name: string }) => void,
  disabled: boolean
}

export const GroupEditor: React.VFC<GroupEditorProps> = ({onSubmit, disabled}: GroupEditorProps) => {
  const [groupName, setGroupName] = useState("");
  const isValid = () => groupName.length > 0 && groupName.length < 255 && !disabled;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isValid()) {
      onSubmit({name: groupName})
    }

  }

  return (
    <div className="bg-white p-5 shadow w-full">
      {/* Title view */}
      <h3>Nouveau groupe</h3>
      <form onSubmit={handleSubmit} className={"flex items-center justify-between"}>
        <div className={"flex-1 mr-5"}>
          <Input value={groupName} onChange={e => setGroupName(e.target.value)} icon={faUsers} disabled={disabled}
                 placeholder={"Nom du groupe"}/>
        </div>
        <Button variant={'PRIMARY'} disabled={!isValid()} type={'submit'}>Créer</Button>

      </form>
    </div>
  )
}
