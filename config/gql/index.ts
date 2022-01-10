import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../generated/config-schemas';
import {getEnv} from "../../utils/getEnv";

const HTTP_BASE_URL = getEnv('HASURA_URL', '');
const ENDPOINT = '/v1/graphql';

const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

const gqlClient = new GraphQLClient(HTTP_URL, {
  headers: { 'x-hasura-admin-secret': getEnv('HASURA_ADMIN', '') },
});

export const gqlSdk = getSdk(gqlClient);
