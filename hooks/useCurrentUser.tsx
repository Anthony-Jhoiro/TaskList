import React, { createContext } from 'react';
import {useGetCurrentUserQuery} from "../generated/data-schemas";


const useCurrentUserValue = () => {
  const [{ data, error, fetching }] = useGetCurrentUserQuery({
    requestPolicy: 'network-only', // No cache
  });

  if (error) {
      console.error("Fail to fetch the user", error.message);
  }

  const maybeUser = data?.user?.[0];
  return { error, user: maybeUser, fetching, loading: fetching };
};

export type UseCurrentUserContextContextType = ReturnType<
  typeof useCurrentUserValue
  >;

const UseCurrentUserContext = createContext<
  UseCurrentUserContextContextType | undefined
  >(undefined);

export const CurrentUserProvider = ({
                                      children,
                                    }: {
  children: React.ReactNode;
}) => {
  const value = useCurrentUserValue();

  return (
    <UseCurrentUserContext.Provider value={value}>
      {children}
    </UseCurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = React.useContext(UseCurrentUserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CurrentUserProvider');
  }
  return {...context};
};
