import React from "react";
import {PublicTaskFragment} from "../../generated/data-schemas";


export interface TaskCardProps {
  task: PublicTaskFragment,
  unread?: boolean
}

export const TaskCard: React.VFC<TaskCardProps> = ({task, unread}: TaskCardProps) => {
  return (
    <div className="bg-white p-5 shadow flex items-center group relative">

      {/* Ping icon if unread */}
      {!unread && <div className={"absolute -top-1 -right-1"}> <span className="flex h-3 w-3 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-50 opacity-75"/>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"/>
        </span>
      </div>}


      {/* Icon left side */}
      <div>
        <b>{task.icon}</b>
      </div>

      {/* Title Middle */}
      <div className={"flex-1"}>
        <h3 className={"ml-3 text-lg transition-colors text-primary-600 group-hover:text-primary-400 "}>{task.title}</h3>
      </div>
      <div className={"flex items-end flex-col "}>
        <p className={"text-sm"}>Dernière mise à jour : {new Date(task.updated_at).toLocaleDateString()} </p>
        <p className={"text-sm"}>Par {task.userByUpdatedBy.name}</p>
      </div>
    </div>
  )
}
