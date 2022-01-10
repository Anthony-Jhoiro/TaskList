import React, { createContext, useContext } from 'react';
import {useSession} from "next-auth/react";

function useAuthContextValue() {
  const {data: session, status} = useSession();

  return {
    status,
    user: session?.user,
    userId: session?.id,
    token: session?.token ?? null,
    // TODO : Add roles
    // userRole: session?.role ?? null,
    // allowedRoles: session?.allowedRoles ?? [],
  };
}

export type UseAuthContext = ReturnType<typeof useAuthContextValue>;

const Context = createContext<UseAuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC = (props) => {
  const value = useAuthContextValue();
  return <Context.Provider value={value} {...props} />;
};

export function useAuthContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(`useAuthContext must be used within a AuthContextProvider`);
  }
  return {
    ...context,
  };
}
