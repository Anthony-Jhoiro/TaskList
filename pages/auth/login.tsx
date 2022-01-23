import {signIn} from "next-auth/react";
import Image from "next/image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {useEffect} from "react";
import {useRouter} from "next/router";



export default function LoginPage() {
  const {user, fetching} = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!fetching && user) {
      const path = router.query.callbackUrl as string ?? "/";
      router.push(path).then();
    }
  })


  return <>
    <div id={"login-page"} className="w-full flex flex-col h-full flex flex-col items-center gap-8">
      <div id={"login-page-logo"} className="h-72 w-72 overflow-hidden relative">
        <Image src={"/images/logo_transparent.png"} alt={"Logo de Les Trucs à Faire"} layout={"fill"}
               objectFit={"contain"}/>
      </div>
      <div id={"login-page-title"} className="text-center text-primary">
        <h1 className="text-xl">Afin d{"'"}accéder à l{"'"}ensemble de nos fonctionnalités</h1>
        <h2 className="text-lg mt-3">Connectez vous !</h2>
      </div>

      <div id={"login-page-form"}>
        <button className="bg-white p-5 flex gap-4 items-center transition-shadow shadow hover:shadow-lg" onClick={() => signIn("google")}>
          <div className={"text-xl"}>
            <FontAwesomeIcon icon={faGoogle} color={"#DB4437"}/>
          </div>
          <span className={"text-lg"}>Se connecter avec Google</span>
        </button>
      </div>
    </div>
  </>
}
