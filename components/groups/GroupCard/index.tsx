import React from "react";
import {PublicGroupFragment} from "../../../generated/data-schemas";
import {UserProfile} from "../../users/UserProfile";


export interface GroupCardProps {
  group: PublicGroupFragment
}

export const GroupCard: React.VFC<GroupCardProps> = ({group}: GroupCardProps) => {
  return (
    <div className="bg-white p-5 shadow-md transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer max-w-xl paper-1 group">
      {/* Title view */}
      <div className={"mb-2 inline-block"}>
        <h3 className={"text-xl text-primary-700 font-semibold"}>{group.name}</h3>
        <svg width="100%" height={5} viewBox="0 0 58 5" fill="none" preserveAspectRatio={"none"}>
          <path
            width={"100%"} height={"5"} className={'group-hover:animate-underline no-stroke'}
            d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
            stroke="#3B91E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Author view */}
      <UserProfile user={group.user} />
    </div>
  )
}
