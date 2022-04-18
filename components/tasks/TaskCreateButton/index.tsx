import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons";


export interface TaskCreateButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string
}

export const TaskCreateButton: React.VFC<TaskCreateButtonProps> = ({label, className, ...buttonProps}: TaskCreateButtonProps) => {
  return (
    <button
      className={"w-full paper-2 bg-primary-300 text-primary-900 flex items-center justify-center h-16 hover:bg-primary-400 active:hover:bg-primary-600 " + className} {...buttonProps}>
      <div className={""}>
        <FontAwesomeIcon icon={faPlus}/>
        <span className={"align-middle ml-2 text-lg"}>{label}</span>
      </div>
    </button>
  )
}
