import React from "react";
import {PublicGroupFragment} from "../../../generated/data-schemas";
import Image from "next/image";


export interface GroupCardProps {
  group: PublicGroupFragment
}

export const GroupCard: React.VFC<GroupCardProps> = ({group}: GroupCardProps) => {
  return (
    <div className="bg-white p-5 shadow transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer w-full">
      {/* Title view */}
      <div>
        <h3 className={"text-xl text-primary-700 mb-2"}>{group.name}</h3>
      </div>

      {/* Author view */}
      <div className={"flex items-center"}>
        <div className={"rounded-full h-8 w-8 bg-gray-200 overflow-hidden relative"}>
          {group.user.image &&
          <Image src={group.user.image} alt={`Photo de profil de ${group.user.name}`} objectFit={'cover'}
                 layout={'fill'}/>}
        </div>
        <h3 className={"text-secondary-800 text-lg ml-2"}>{group.user.name}</h3>
      </div>
    </div>
  )
}
