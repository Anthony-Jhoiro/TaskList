import React from "react";
import Image from "next/image";

export interface User {
  name?: string | null,
  id: string,
  image?: string | null
}


export interface UserProfileProps {
  user: User,
  imageOnly?: boolean
}

export const UserProfile: React.VFC<UserProfileProps> = ({user, imageOnly}: UserProfileProps) => {
  const name = user.name ?? "unknown";

  return (
    <div className={"flex items-center"}>
      <div className={"paper-circle h-8 w-8 bg-gray-200 overflow-hidden relative"}>
        {user.image &&
        <Image src={user.image} alt={`Photo de profil de ${name}`} objectFit={'cover'}
               layout={'fill'}/>}
      </div>
      {imageOnly || <p className={"text-primary-700 text-lg ml-2"}>{name}</p>}
    </div>
  )
}
