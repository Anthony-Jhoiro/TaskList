import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {JWT} from "next-auth/jwt";
import {sign, verify} from 'jsonwebtoken';
import {HasuraAdapter} from "../../../config/next-auth/HasuraAdapter";
import {getEnv} from "../../../utils/getEnv";

const JWT_SECRET = getEnv('JWT_SECRET', '');

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: getEnv('GOOGLE_CLIENT_ID', ''),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET', '')
    }),
    // ...add more providers here
  ],

  debug: false,

  secret: JWT_SECRET,

  session: {
    jwt: true,
    // In next version, replace by : strategy: 'jwt',

    maxAge: 30 * 24 * 60 * 60, // 30 days

    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    secret: JWT_SECRET,
  encode: async ({secret, token}) => {
      // Refresh the token

      if (!token || !token.sub) return "";

      const jwtClaims = {
        ...token,
        "sub": token?.sub?.toString(),
        "iat": Date.now() / 1000,
        "exp": Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 1 day

      }

      return sign(jwtClaims, secret, {algorithm: 'HS256'});
    },

    decode: async ({secret, token}) => {
      if (!token) throw Error("No token provided");
      const decoded = verify(token, secret, {algorithms: ['HS256']});
      return decoded as JWT;
    },
  },


  callbacks: {

    async signIn({}) {
      // All users can sign-in
      return true
    },
    async session({session, token, user}) {
      const encodedToken = sign(
        token || user,
        JWT_SECRET,
        { algorithm: 'RS512' },
      );

      const claims: any = token?.['https://hasura.io/jwt/claims'];

      if (claims) {
        session.role = claims['x-hasura-default-role'];
        session.allowedRoles = claims['x-hasura-allowed-roles'];
      }

      session.id = token.id;
      session.token = encodedToken;

      return session;
    },
    async jwt({token, user}) {

      if (!user) {
        return token;
      }

      // By default, all authentified users have role 'user'
      token = {
        ...token,
        'id': user?.id,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': user?.id,
        },
      };

      return token;
    }
  },
  adapter: HasuraAdapter({}, {})


})