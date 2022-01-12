import React, {useEffect} from "react";
import {useCurrentUser} from "../../../hooks/useCurrentUser";
import {FullScreenLoading} from "../../FullScreenLoading";
import {signIn} from "next-auth/react";
import {NavBar} from "../../NavBar";



export interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
  const {user, error, fetching} = useCurrentUser();

  useEffect(() => {
    // Redirect to login screen if the user is not logged-in
    if (!fetching && (error || !user)) {
      signIn().then();
    }
  }, [fetching, error, user])


  if (fetching) {
    return <FullScreenLoading />
  }

  if (!user) {
    return <p>Redirection...</p>
  }

  return (
    <div className={"bg-background min-h-screen"}>
      <NavBar user={user} />
      {children}
    </div>
  )
}
