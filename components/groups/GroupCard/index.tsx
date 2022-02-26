import React from "react";
import {PublicGroupFragment} from "../../../generated/data-schemas";
import {UserProfile} from "../../users/UserProfile";


export interface GroupCardProps {
  group: PublicGroupFragment
}

export const GroupCard: React.VFC<GroupCardProps> = ({group}: GroupCardProps) => {
  return (
    <div className="bg-white p-5 shadow transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer w-full">
      {/* Title view */}
      <div>
        <h3 className={"text-xl text-primary-700 font-semibold mb-2"}>{group.name}</h3>
      </div>

      {/* Author view */}
      <UserProfile user={group.user} />
    </div>
  )
}
