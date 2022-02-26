import Image from "next/image";
import {Profile} from "../../../generated/data-schemas";


export interface UserPossibilityProps {
  user: Profile,
  onAdd: (user: Profile) => void,
  selected?: boolean
}


export const UserPossibility = ({user, onAdd, selected}: UserPossibilityProps) => <button
  className={"flex items-center m-2 group shadow p-1.5  cursor-pointer " + (selected ? 'border-primary border-l-8' : '')}
  onClick={() => onAdd(user)}>
  <div className={"flex items-center"}>
    <div className={"rounded-full h-8 w-8 bg-gray-200 overflow-hidden relative"}>
      {user.image &&
      <Image src={user.image} alt={`Photo de profil de ${user.name}`} objectFit={'cover'} layout={'fill'}/>}
    </div>
    <p className={"text-gray-600 text-md ml-2"}>{user.name}</p>
  </div>
</button>