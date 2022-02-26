import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons";


export interface TaskCreateButtonProps extends React.ComponentPropsWithoutRef<"button"> {

}

export const TaskCreateButton: React.VFC<TaskCreateButtonProps> = ({...buttonProps}: TaskCreateButtonProps) => {
  return (
    <button className={"w-full bg-gray-300 text-black flex items-center justify-center h-16 hover:bg-gray-400 active:hover:bg-gray-600 "} {...buttonProps}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )
}
