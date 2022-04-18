import React, {useCallback, useEffect} from "react";
import {useCurrentUser} from "../../../hooks/useCurrentUser";
import {FullScreenLoading} from "../../shared/indicators/FullScreenLoading";
import {signIn} from "next-auth/react";
import {NavBar} from "../../shared/navigation/NavBar";
import {useRouter} from "next/router";


export interface DefaultLayoutProps {
  children: React.ReactNode
}

const ALLOWED_ROUTES = [
  '/auth/login'
]

export const DefaultLayout = ({children,}: DefaultLayoutProps) => {
  const {user, error, fetching} = useCurrentUser();
  const router = useRouter();

  const shouldRedirect = useCallback(() => !user && !ALLOWED_ROUTES.includes(router.pathname), [router, user])

  useEffect(() => {
    // Redirect to login screen if the user is not logged-in
    if (!fetching && shouldRedirect()) {
      signIn().then();
    }
  }, [fetching, error, user, shouldRedirect])


  if (fetching) {
    return <FullScreenLoading/>
  }

  if (shouldRedirect()) {
    return <p>Redirection...</p>
  }

  return (
    <div className={"min-h-screen"}>
      <NavBar user={user}/>
      {children}
    </div>
  )
}
