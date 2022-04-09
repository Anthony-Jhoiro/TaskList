import React, {useState} from "react";
import dynamic from "next/dynamic";
import {Button} from "../../shared/actions/Button";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Task} from "../../../types/task";
import Image from "next/image"


const Editor = dynamic(() => import("../../shared/extendedForms/CustomEditor"), {ssr: false})


export interface TaskCardProps {
  task: Task,
  onEdit: (task: Task) => void
  unread?: boolean
}

export const TaskCard: React.VFC<TaskCardProps> = ({task, unread, onEdit}: TaskCardProps) => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={"relative"}>

      <div className="bg-white p-5 shadow flex items-center group relative h-16 cursor-pointer" onClick={() => setExtended(!extended)}>

        {/* Ping icon if unread */}
        {unread && <div className={"absolute -top-1 -right-1 md:hidden"}> <span className="flex h-3 w-3 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-50 opacity-75"/>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500 z-50" />
        </span>
        </div>}


        {/* Icon left side */}
        <div>
          <b>{task.icon}</b>
        </div>

        {/* Title Middle */}
        <div className={"flex-1"}>
          <h3
            className={"ml-3 text-lg transition-colors text-primary-700 group-hover:text-primary-400 font-semibold"}>{task.title}</h3>
        </div>
        <div className={"flex items-end flex-col "}>
          <p className={"text-sm"}>Dernière mise à jour : {new Date(task.updated_at).toLocaleDateString()} </p>
          {task.updatedByUser && <p className={"text-sm"}>Par {task.updatedByUser.name}</p>}
        </div>
      </div>

      {unread && <div className={"absolute top-0 -left-10 animate-bounce-horizontal hidden md:block"}>
        <Image alt={"unread"} src={'/hand-draw-arrow.svg'} width={50} height={50}/>
      </div>}

      {/* Dropdown part */}
      <div
        className={"overflow-hidden bg-gray-100 text-center  transition-all " + (extended ? "max-h-full" : "max-h-0")}>
        <div className={"p-2"}>
          <div className={"text-right mb-2"}>
            <Button icon={faEdit} onClick={() => onEdit(task)}>Editer</Button>
          </div>
          <div className={"flex flex-col items-center"}>
          <div className={"bg-gray-50 container"}>
            <Editor blocks={task.content} readonly={true}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
