import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect, useState} from "react";
import { Provider as UrqlProvider } from 'urql';
import {createAuthClient} from "./urqlClient";

export function ClientProvider(props: React.PropsWithChildren<{}>) {
  const { token } = useAuthContext();

  const [urqlClient, setUrqlClient] = useState(createAuthClient());

  useEffect(() => {
    const hasNoToken = token === undefined || token === null;
    if (!hasNoToken) {
      setUrqlClient(createAuthClient());
      // setIsAnonymousClient(false);
    }
    // if (hasNoToken && isAnonymousClient) {
    //   setUrqlClient(createAnonymousClient());
    //   setIsAnonymousClient(true);
    // }
  }, [token]);

  return <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>;
}