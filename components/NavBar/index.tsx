import {PublicUserFragment} from "../../generated/data-schemas";
import Image from "next/image";

export interface NavBarProps {
  user: PublicUserFragment
}

export function NavBar({user}: NavBarProps) {
  return (
    <div className={"flex w-full bg-white shadow h-14 items-center justify-between px-5"}>
      <div className="text-primary text-xl" id={"logo-title"}>Les Trucs à faire</div>
      <div className={"flex items-center"}>
        <div className={"rounded-full h-10 w-10 bg-gray-200 overflow-hidden relative"}>
          {user.image && <Image src={user.image} alt={`Photo de profil de ${user.name}`} objectFit={'cover'} layout={'fill'} />}
        </div>
        <h3 className={"text-primary-400 text-lg ml-2  sm:block hidden"}>{user.name}</h3>
      </div>
    </div>
  )
}

