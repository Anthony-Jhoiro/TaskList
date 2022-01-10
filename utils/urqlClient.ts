import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
} from 'urql';
import { makeOperation } from '@urql/core';

import { authExchange } from '@urql/exchange-auth';
import {getSession} from "next-auth/react";
import {getEnv} from "./getEnv";

const HTTP_BASE_URL = getEnv('HASURA_URL', '')
const ENDPOINT = '/v1/graphql';

export const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

export const createAnonymousClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: false,
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
  });
};

export const createAuthClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: false,
    exchanges: [
      errorExchange({
        onError: (error) => {
          console.error(error, 'URQL ERROR');
        },
      }),
      dedupExchange,
      cacheExchange,
      authExchange<{ token: string }>({
        getAuth: async (_) => {
          const session = await getSession();
          const maybeToken = session?.token as string;
          console.log('[getAuth] new token : ', { session, maybeToken });
          if (!maybeToken) {
            return null;
          }
          return { token: maybeToken };
        },
        addAuthToOperation: ({ authState, operation }) => {
          if (!authState?.token) {
            return operation;
          }
          const fetchOptions =
            typeof operation.context.fetchOptions === 'function'
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};
          return makeOperation(operation.kind, operation, {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${authState.token}`,
              },
            },
          });
        },
        didAuthError: (params) => {
          console.error('didAuthError', params);
          return params.error.message.includes('JWT');
        },
      }),
      fetchExchange,
    ],
  });
};