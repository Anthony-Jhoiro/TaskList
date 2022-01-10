import {Adapter} from "next-auth/adapters";
import {gqlSdk} from "../gql";


export const HasuraAdapter = (_: any, {}): Adapter => {
  return {
    // @ts-ignore
    async createUser(user) {
      const {insert_user_one} = await gqlSdk.createUser({user: user});
      if (!insert_user_one) throw new Error(`Could not create the user ${JSON.stringify(user)}`);
      return insert_user_one;
    },
    // @ts-ignore
    async getUser(id) {
      const {user_by_pk} = await gqlSdk.getUserById({id})
      return user_by_pk ?? null;
    },
    // @ts-ignore
    async getUserByEmail(email) {
      const {user} = await gqlSdk.getUserByEmail({email})
      return user[0] ?? null;
    },
    // @ts-ignore
    async getUserByAccount({provider, providerAccountId}) {
      const {account} = await gqlSdk.getUserByProviderAccountId({providerId: provider, providerAccountId});
      return account[0]?.user ?? null;
    },
    async deleteUser(userId) {
      await gqlSdk.deleteUser({id: userId});
    },
    async linkAccount(account) {
      await gqlSdk.linkAccount({
        account: {
          access_token: account.access_token,
          expires_at: account.expires_at,
          id_token: account.id_token,
          oauth_token: null,
          oauth_token_secret: null,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          scope: account.scope,
          session_state: account.session_state,
          token_type: account.token_type,
          type: account.type,
          userId: account.userId
        }
      })
    },
    async unlinkAccount(_) {
      throw new Error('unlinkAccount Not implemented');
    },
    async createSession(_) {
      throw new Error('createSession Not implemented');
    },
    async getSessionAndUser(_) {
      throw new Error('getSessionAndUser Not implemented');
    },
    async updateSession(_) {
      throw new Error('updateSession Not implemented');
    },
    async deleteSession(_) {
      throw new Error('deleteSession Not implemented');
    },
    async updateUser(_) {
      throw new Error('updateUser not implemented');
    },
  }
}
