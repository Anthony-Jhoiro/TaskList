import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {sign} from 'jsonwebtoken';
import {HasuraAdapter} from "../../../config/next-auth/HasuraAdapter";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    // ...add more providers here
  ],

  debug: false,

  secret: (process.env.JWT_SECRET ?? '').replaceAll("\\n", "\n"),

  session: {
    strategy: 'jwt',
    // In next version, replace by : strategy: 'jwt',

    maxAge: 30 * 24 * 60 * 60, // 30 days

    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {},


  callbacks: {

    async signIn({}) {
      // All users can sign-in
      return true
    },
    async session({session, token, user}) {
      const encodedToken = sign(
        token || user,
        (process.env.JWT_SECRET ?? '').replaceAll("\\n", "\n"),
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
  adapter: HasuraAdapter({}, {}),
})