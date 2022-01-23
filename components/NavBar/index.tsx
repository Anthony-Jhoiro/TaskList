import Image from "next/image";
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {signOut} from "next-auth/react";

export interface NavBarProps {
  user?: any
}

export function NavBar({user}: NavBarProps) {
  const [signOutOpen, setSignoutOpen] = useState(false)

  return (
    <div className="relative bg-white">

      {user && signOutOpen && <div className="absolute bg-gray-50 right-0 shadow top-full z-50">
          <button className="flex gap-4 items-center text-primary-600 p-3 " onClick={() => signOut()}>
              <div className="text-xl transition-">
                  <FontAwesomeIcon icon={faSignOutAlt}/>
              </div>
              <span className="">Se déconnecter</span>
          </button>
      </div>}

      <div className={"flex w-full bg-white shadow h-14 items-center justify-between px-5 z-50"}>
        <Link href={"/groups"}><a className="text-primary text-xl" id={"logo-title"}>Les Trucs à faire</a></Link>
        {user &&
        <div className={"flex items-center cursor-pointer z-50"} onClick={() => setSignoutOpen(!signOutOpen)}>

            <div className={"rounded-full h-10 w-10 bg-gray-200 overflow-hidden relative"}>
              {user.image &&
              <Image src={user.image} alt={`Photo de profil de ${user.name}`} objectFit={'cover'} layout={'fill'}/>}
            </div>
            <h3 className={"text-primary-400 text-lg ml-2  sm:block hidden"}>{user.name}</h3>

        </div>}
      </div>




    </div>


  )
}

