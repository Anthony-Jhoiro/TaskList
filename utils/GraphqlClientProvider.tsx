import {useAuthContext} from "../hooks/useAuthContext";
import {useEffect, useState} from "react";
import { Provider as UrqlProvider } from 'urql';
import {createAnonymousClient, createAuthClient} from "./urqlClient";

export function ClientProvider(props: React.PropsWithChildren<{}>) {
  const { token } = useAuthContext();

  const [urqlClient, setUrqlClient] = useState(createAnonymousClient());
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  useEffect(() => {
    const hasNoToken = token === undefined || token === null;
    if (!hasNoToken && isAnonymousClient) {
      console.log('Creating auth token');
      setUrqlClient(createAuthClient());
      setIsAnonymousClient(false);
    }
    if (hasNoToken && !isAnonymousClient) {
      console.log('Creating anonymous token');
      setUrqlClient(createAnonymousClient());
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, token]);

  return <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>;
}