import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Toaster} from "react-hot-toast";
import {SessionProvider} from "next-auth/react"
import {AuthContextProvider} from "../hooks/useAuthContext";
import {ClientProvider} from "../utils/GraphqlClientProvider";
import {CurrentUserProvider} from "../hooks/useCurrentUser";
import { appWithTranslation } from 'next-i18next';


function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return <>
    <SessionProvider session={session}>
      <AuthContextProvider>
        <ClientProvider>
          <CurrentUserProvider>
            <Toaster/>
            <Component {...pageProps} />
          </CurrentUserProvider>
        </ClientProvider>
      </AuthContextProvider>
    </SessionProvider>
  </>

}

export default appWithTranslation(MyApp)
