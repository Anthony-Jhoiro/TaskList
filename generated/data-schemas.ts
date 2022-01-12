import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/**
 * The Account model is for information about OAuth accounts associated with a User. It will usually contain access_token, id_token and other OAuth specific data. TokenSet from openid-client might give you an idea of all the fields.
 *
 *
 * columns and relationships of "account"
 *
 */
export type Account = {
  __typename?: 'account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  id_token: Scalars['String'];
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_account_id: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope: Scalars['String'];
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  avg?: Maybe<Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
  stddev?: Maybe<Account_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Sum_Fields>;
  var_pop?: Maybe<Account_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Var_Samp_Fields>;
  variance?: Maybe<Account_Variance_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type Account_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Account_Max_Order_By>;
  min?: InputMaybe<Account_Min_Order_By>;
  stddev?: InputMaybe<Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Account_Sum_Order_By>;
  var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account" */
export type Account_Arr_Rel_Insert_Input = {
  data: Array<Account_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  __typename?: 'account_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  provider_account_id?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint */
  AccountPkey = 'account_pkey'
}

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_account_id?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_account_id?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_account_id?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** on conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_account_id?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  __typename?: 'account_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  __typename?: 'account_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  __typename?: 'account_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  __typename?: 'account_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  __typename?: 'account_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  __typename?: 'account_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  __typename?: 'account_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  tasks: Array<Task>;
  /** An aggregate relationship */
  tasks_aggregate: Task_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An array relationship */
  user_groups: Array<User_Group>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Group_Aggregate;
  /** An array relationship */
  users: Array<Group_Users_View>;
  /** An aggregate relationship */
  users_aggregate: Group_Users_View_Aggregate;
};


/** columns and relationships of "group" */
export type GroupTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupUsersArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group" */
export type Group_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Max_Order_By>;
  min?: InputMaybe<Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group" */
export type Group_Arr_Rel_Insert_Input = {
  data: Array<Group_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Bool_Exp>>;
  _not?: InputMaybe<Group_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_groups?: InputMaybe<User_Group_Bool_Exp>;
  users?: InputMaybe<Group_Users_View_Bool_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupPkey = 'group_pkey'
}

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_groups?: InputMaybe<User_Group_Arr_Rel_Insert_Input>;
  users?: InputMaybe<Group_Users_View_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group" */
export type Group_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group" */
export type Group_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Group_On_Conflict>;
};

/** on conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: InputMaybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_groups_aggregate?: InputMaybe<User_Group_Aggregate_Order_By>;
  users_aggregate?: InputMaybe<Group_Users_View_Aggregate_Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "group_users_view" */
export type Group_Users_View = {
  __typename?: 'group_users_view';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "group_users_view" */
export type Group_Users_View_Aggregate = {
  __typename?: 'group_users_view_aggregate';
  aggregate?: Maybe<Group_Users_View_Aggregate_Fields>;
  nodes: Array<Group_Users_View>;
};

/** aggregate fields of "group_users_view" */
export type Group_Users_View_Aggregate_Fields = {
  __typename?: 'group_users_view_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Group_Users_View_Max_Fields>;
  min?: Maybe<Group_Users_View_Min_Fields>;
};


/** aggregate fields of "group_users_view" */
export type Group_Users_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_users_view" */
export type Group_Users_View_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Users_View_Max_Order_By>;
  min?: InputMaybe<Group_Users_View_Min_Order_By>;
};

/** input type for inserting array relation for remote table "group_users_view" */
export type Group_Users_View_Arr_Rel_Insert_Input = {
  data: Array<Group_Users_View_Insert_Input>;
};

/** Boolean expression to filter rows from the table "group_users_view". All fields are combined with a logical 'AND'. */
export type Group_Users_View_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Users_View_Bool_Exp>>;
  _not?: InputMaybe<Group_Users_View_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Users_View_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Timestamptz_Comparison_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "group_users_view" */
export type Group_Users_View_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['timestamptz']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Users_View_Max_Fields = {
  __typename?: 'group_users_view_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "group_users_view" */
export type Group_Users_View_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Users_View_Min_Fields = {
  __typename?: 'group_users_view_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "group_users_view" */
export type Group_Users_View_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "group_users_view". */
export type Group_Users_View_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "group_users_view" */
export enum Group_Users_View_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<Profile_Mutation_Response>;
  /** delete data from the table: "task" */
  delete_task?: Maybe<Task_Mutation_Response>;
  /** delete single row from the table: "task" */
  delete_task_by_pk?: Maybe<Task>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_group" */
  delete_user_group?: Maybe<User_Group_Mutation_Response>;
  /** delete single row from the table: "user_group" */
  delete_user_group_by_pk?: Maybe<User_Group>;
  /** delete data from the table: "verification_token" */
  delete_verification_token?: Maybe<Verification_Token_Mutation_Response>;
  /** delete single row from the table: "verification_token" */
  delete_verification_token_by_pk?: Maybe<Verification_Token>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "task" */
  insert_task?: Maybe<Task_Mutation_Response>;
  /** insert a single row into the table: "task" */
  insert_task_one?: Maybe<Task>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_group" */
  insert_user_group?: Maybe<User_Group_Mutation_Response>;
  /** insert a single row into the table: "user_group" */
  insert_user_group_one?: Maybe<User_Group>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "verification_token" */
  insert_verification_token?: Maybe<Verification_Token_Mutation_Response>;
  /** insert a single row into the table: "verification_token" */
  insert_verification_token_one?: Maybe<Verification_Token>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update data of the table: "task" */
  update_task?: Maybe<Task_Mutation_Response>;
  /** update single row of the table: "task" */
  update_task_by_pk?: Maybe<Task>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_group" */
  update_user_group?: Maybe<User_Group_Mutation_Response>;
  /** update single row of the table: "user_group" */
  update_user_group_by_pk?: Maybe<User_Group>;
  /** update data of the table: "verification_token" */
  update_verification_token?: Maybe<Verification_Token_Mutation_Response>;
  /** update single row of the table: "verification_token" */
  update_verification_token_by_pk?: Maybe<Verification_Token>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProfileArgs = {
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TaskArgs = {
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_GroupArgs = {
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Group_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokenArgs = {
  where: Verification_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Token_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
  objects: Array<Task_Insert_Input>;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
  object: Task_Insert_Input;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GroupArgs = {
  objects: Array<User_Group_Insert_Input>;
  on_conflict?: InputMaybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Group_OneArgs = {
  object: User_Group_Insert_Input;
  on_conflict?: InputMaybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokenArgs = {
  objects: Array<Verification_Token_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Token_OneArgs = {
  object: Verification_Token_Insert_Input;
  on_conflict?: InputMaybe<Verification_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
  _append?: InputMaybe<Task_Append_Input>;
  _delete_at_path?: InputMaybe<Task_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Task_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Task_Delete_Key_Input>;
  _prepend?: InputMaybe<Task_Prepend_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
  _append?: InputMaybe<Task_Append_Input>;
  _delete_at_path?: InputMaybe<Task_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Task_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Task_Delete_Key_Input>;
  _prepend?: InputMaybe<Task_Prepend_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  pk_columns: Task_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GroupArgs = {
  _inc?: InputMaybe<User_Group_Inc_Input>;
  _set?: InputMaybe<User_Group_Set_Input>;
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Group_By_PkArgs = {
  _inc?: InputMaybe<User_Group_Inc_Input>;
  _set?: InputMaybe<User_Group_Set_Input>;
  pk_columns: User_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokenArgs = {
  _set?: InputMaybe<Verification_Token_Set_Input>;
  where: Verification_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Token_By_PkArgs = {
  _set?: InputMaybe<Verification_Token_Set_Input>;
  pk_columns: Verification_Token_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: 'profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_users_view" */
  group_users_view: Array<Group_Users_View>;
  /** fetch aggregated fields from the table: "group_users_view" */
  group_users_view_aggregate: Group_Users_View_Aggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "user_groups_view" */
  user_groups_view: Array<User_Groups_View>;
  /** fetch aggregated fields from the table: "user_groups_view" */
  user_groups_view_aggregate: User_Groups_View_Aggregate;
  /** fetch data from the table: "verification_token" */
  verification_token: Array<Verification_Token>;
  /** fetch aggregated fields from the table: "verification_token" */
  verification_token_aggregate: Verification_Token_Aggregate;
  /** fetch data from the table: "verification_token" using primary key columns */
  verification_token_by_pk?: Maybe<Verification_Token>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_Users_ViewArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};


export type Query_RootGroup_Users_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};


export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_GroupArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


export type Query_RootUser_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


export type Query_RootUser_Group_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Groups_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


export type Query_RootUser_Groups_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


export type Query_RootVerification_TokenArgs = {
  distinct_on?: InputMaybe<Array<Verification_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Token_Order_By>>;
  where?: InputMaybe<Verification_Token_Bool_Exp>;
};


export type Query_RootVerification_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Token_Order_By>>;
  where?: InputMaybe<Verification_Token_Bool_Exp>;
};


export type Query_RootVerification_Token_By_PkArgs = {
  token: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_users_view" */
  group_users_view: Array<Group_Users_View>;
  /** fetch aggregated fields from the table: "group_users_view" */
  group_users_view_aggregate: Group_Users_View_Aggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "user_groups_view" */
  user_groups_view: Array<User_Groups_View>;
  /** fetch aggregated fields from the table: "user_groups_view" */
  user_groups_view_aggregate: User_Groups_View_Aggregate;
  /** fetch data from the table: "verification_token" */
  verification_token: Array<Verification_Token>;
  /** fetch aggregated fields from the table: "verification_token" */
  verification_token_aggregate: Verification_Token_Aggregate;
  /** fetch data from the table: "verification_token" using primary key columns */
  verification_token_by_pk?: Maybe<Verification_Token>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_Users_ViewArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};


export type Subscription_RootGroup_Users_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Users_View_Order_By>>;
  where?: InputMaybe<Group_Users_View_Bool_Exp>;
};


export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_GroupArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


export type Subscription_RootUser_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


export type Subscription_RootUser_Group_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Groups_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


export type Subscription_RootUser_Groups_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


export type Subscription_RootVerification_TokenArgs = {
  distinct_on?: InputMaybe<Array<Verification_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Token_Order_By>>;
  where?: InputMaybe<Verification_Token_Bool_Exp>;
};


export type Subscription_RootVerification_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Token_Order_By>>;
  where?: InputMaybe<Verification_Token_Bool_Exp>;
};


export type Subscription_RootVerification_Token_By_PkArgs = {
  token: Scalars['String'];
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: 'task';
  content: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['uuid'];
  /** An object relationship */
  group: Group;
  group_id: Scalars['uuid'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['uuid'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  userByUpdatedBy: User;
};


/** columns and relationships of "task" */
export type TaskContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "task" */
export type Task_Aggregate = {
  __typename?: 'task_aggregate';
  aggregate?: Maybe<Task_Aggregate_Fields>;
  nodes: Array<Task>;
};

/** aggregate fields of "task" */
export type Task_Aggregate_Fields = {
  __typename?: 'task_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Task_Max_Fields>;
  min?: Maybe<Task_Min_Fields>;
};


/** aggregate fields of "task" */
export type Task_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Task_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userByUpdatedBy?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "task" */
export enum Task_Constraint {
  /** unique or primary key constraint */
  TaskPkey = 'task_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Task_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Task_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Task_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  group?: InputMaybe<Group_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userByUpdatedBy?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Task_Max_Fields = {
  __typename?: 'task_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_Min_Fields = {
  __typename?: 'task_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
  __typename?: 'task_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Task>;
};

/** on conflict condition type for table "task" */
export type Task_On_Conflict = {
  constraint: Task_Constraint;
  update_columns?: Array<Task_Update_Column>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  group_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userByUpdatedBy?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Task_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "task" */
export enum Task_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "task" */
export type Task_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  group_id?: InputMaybe<Scalars['uuid']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "task" */
export enum Task_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accounts_aggregate: Account_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  createdGroups: Array<Group>;
  /** An aggregate relationship */
  createdGroups_aggregate: Group_Aggregate;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  groups: Array<User_Groups_View>;
  /** An aggregate relationship */
  groups_aggregate: User_Groups_View_Aggregate;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  tasks: Array<Task>;
  /** An array relationship */
  tasksByUpdatedBy: Array<Task>;
  /** An aggregate relationship */
  tasksByUpdatedBy_aggregate: Task_Aggregate;
  /** An aggregate relationship */
  tasks_aggregate: Task_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  user_groups: Array<User_Group>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Group_Aggregate;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserCreatedGroupsArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserCreatedGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserGroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Groups_View_Order_By>>;
  where?: InputMaybe<User_Groups_View_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserTasksByUpdatedByArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserTasksByUpdatedBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};


/**
 * NULL
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Group_Order_By>>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  accounts?: InputMaybe<Account_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdGroups?: InputMaybe<Group_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  groups?: InputMaybe<User_Groups_View_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  tasksByUpdatedBy?: InputMaybe<Task_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_groups?: InputMaybe<User_Group_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key'
}

/** columns and relationships of "user_group" */
export type User_Group = {
  __typename?: 'user_group';
  /** An object relationship */
  group: Group;
  group_id: Scalars['uuid'];
  id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_group" */
export type User_Group_Aggregate = {
  __typename?: 'user_group_aggregate';
  aggregate?: Maybe<User_Group_Aggregate_Fields>;
  nodes: Array<User_Group>;
};

/** aggregate fields of "user_group" */
export type User_Group_Aggregate_Fields = {
  __typename?: 'user_group_aggregate_fields';
  avg?: Maybe<User_Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Group_Max_Fields>;
  min?: Maybe<User_Group_Min_Fields>;
  stddev?: Maybe<User_Group_Stddev_Fields>;
  stddev_pop?: Maybe<User_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Group_Stddev_Samp_Fields>;
  sum?: Maybe<User_Group_Sum_Fields>;
  var_pop?: Maybe<User_Group_Var_Pop_Fields>;
  var_samp?: Maybe<User_Group_Var_Samp_Fields>;
  variance?: Maybe<User_Group_Variance_Fields>;
};


/** aggregate fields of "user_group" */
export type User_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_group" */
export type User_Group_Aggregate_Order_By = {
  avg?: InputMaybe<User_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Group_Max_Order_By>;
  min?: InputMaybe<User_Group_Min_Order_By>;
  stddev?: InputMaybe<User_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Group_Sum_Order_By>;
  var_pop?: InputMaybe<User_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_group" */
export type User_Group_Arr_Rel_Insert_Input = {
  data: Array<User_Group_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Group_Avg_Fields = {
  __typename?: 'user_group_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_group" */
export type User_Group_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_group". All fields are combined with a logical 'AND'. */
export type User_Group_Bool_Exp = {
  _and?: InputMaybe<Array<User_Group_Bool_Exp>>;
  _not?: InputMaybe<User_Group_Bool_Exp>;
  _or?: InputMaybe<Array<User_Group_Bool_Exp>>;
  group?: InputMaybe<Group_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_group" */
export enum User_Group_Constraint {
  /** unique or primary key constraint */
  UserGroupPkey = 'user_group_pkey',
  /** unique or primary key constraint */
  UserGroupUserIdGroupIdKey = 'user_group_user_id_group_id_key'
}

/** input type for incrementing numeric columns in table "user_group" */
export type User_Group_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_group" */
export type User_Group_Insert_Input = {
  group?: InputMaybe<Group_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Group_Max_Fields = {
  __typename?: 'user_group_max_fields';
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_group" */
export type User_Group_Max_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Group_Min_Fields = {
  __typename?: 'user_group_min_fields';
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_group" */
export type User_Group_Min_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_group" */
export type User_Group_Mutation_Response = {
  __typename?: 'user_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Group>;
};

/** on conflict condition type for table "user_group" */
export type User_Group_On_Conflict = {
  constraint: User_Group_Constraint;
  update_columns?: Array<User_Group_Update_Column>;
  where?: InputMaybe<User_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "user_group". */
export type User_Group_Order_By = {
  group?: InputMaybe<Group_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_group */
export type User_Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_group" */
export enum User_Group_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_group" */
export type User_Group_Set_Input = {
  group_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Group_Stddev_Fields = {
  __typename?: 'user_group_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_group" */
export type User_Group_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Group_Stddev_Pop_Fields = {
  __typename?: 'user_group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_group" */
export type User_Group_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Group_Stddev_Samp_Fields = {
  __typename?: 'user_group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_group" */
export type User_Group_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Group_Sum_Fields = {
  __typename?: 'user_group_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_group" */
export type User_Group_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user_group" */
export enum User_Group_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Group_Var_Pop_Fields = {
  __typename?: 'user_group_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_group" */
export type User_Group_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Group_Var_Samp_Fields = {
  __typename?: 'user_group_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_group" */
export type User_Group_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Group_Variance_Fields = {
  __typename?: 'user_group_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_group" */
export type User_Group_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_groups_view" */
export type User_Groups_View = {
  __typename?: 'user_groups_view';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "user_groups_view" */
export type User_Groups_View_Aggregate = {
  __typename?: 'user_groups_view_aggregate';
  aggregate?: Maybe<User_Groups_View_Aggregate_Fields>;
  nodes: Array<User_Groups_View>;
};

/** aggregate fields of "user_groups_view" */
export type User_Groups_View_Aggregate_Fields = {
  __typename?: 'user_groups_view_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Groups_View_Max_Fields>;
  min?: Maybe<User_Groups_View_Min_Fields>;
};


/** aggregate fields of "user_groups_view" */
export type User_Groups_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Groups_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_groups_view" */
export type User_Groups_View_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Groups_View_Max_Order_By>;
  min?: InputMaybe<User_Groups_View_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_groups_view" */
export type User_Groups_View_Arr_Rel_Insert_Input = {
  data: Array<User_Groups_View_Insert_Input>;
};

/** Boolean expression to filter rows from the table "user_groups_view". All fields are combined with a logical 'AND'. */
export type User_Groups_View_Bool_Exp = {
  _and?: InputMaybe<Array<User_Groups_View_Bool_Exp>>;
  _not?: InputMaybe<User_Groups_View_Bool_Exp>;
  _or?: InputMaybe<Array<User_Groups_View_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "user_groups_view" */
export type User_Groups_View_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Groups_View_Max_Fields = {
  __typename?: 'user_groups_view_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_groups_view" */
export type User_Groups_View_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Groups_View_Min_Fields = {
  __typename?: 'user_groups_view_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_groups_view" */
export type User_Groups_View_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_groups_view". */
export type User_Groups_View_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_groups_view" */
export enum User_Groups_View_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdGroups?: InputMaybe<Group_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  groups?: InputMaybe<User_Groups_View_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  tasksByUpdatedBy?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_groups?: InputMaybe<User_Group_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdGroups_aggregate?: InputMaybe<Group_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  groups_aggregate?: InputMaybe<User_Groups_View_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tasksByUpdatedBy_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_groups_aggregate?: InputMaybe<User_Group_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_token" */
export type Verification_Token = {
  __typename?: 'verification_token';
  expires: Scalars['timestamptz'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verification_token" */
export type Verification_Token_Aggregate = {
  __typename?: 'verification_token_aggregate';
  aggregate?: Maybe<Verification_Token_Aggregate_Fields>;
  nodes: Array<Verification_Token>;
};

/** aggregate fields of "verification_token" */
export type Verification_Token_Aggregate_Fields = {
  __typename?: 'verification_token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Verification_Token_Max_Fields>;
  min?: Maybe<Verification_Token_Min_Fields>;
};


/** aggregate fields of "verification_token" */
export type Verification_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_token". All fields are combined with a logical 'AND'. */
export type Verification_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Token_Bool_Exp>>;
  _not?: InputMaybe<Verification_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Token_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_token" */
export enum Verification_Token_Constraint {
  /** unique or primary key constraint */
  VerificationTokenPkey = 'verification_token_pkey'
}

/** input type for inserting data into table "verification_token" */
export type Verification_Token_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Token_Max_Fields = {
  __typename?: 'verification_token_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Verification_Token_Min_Fields = {
  __typename?: 'verification_token_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_token" */
export type Verification_Token_Mutation_Response = {
  __typename?: 'verification_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Token>;
};

/** on conflict condition type for table "verification_token" */
export type Verification_Token_On_Conflict = {
  constraint: Verification_Token_Constraint;
  update_columns?: Array<Verification_Token_Update_Column>;
  where?: InputMaybe<Verification_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_token". */
export type Verification_Token_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_token */
export type Verification_Token_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "verification_token" */
export enum Verification_Token_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_token" */
export type Verification_Token_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_token" */
export enum Verification_Token_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type PublicUserFragment = { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined };

export type PublicGroupFragment = { __typename?: 'group', created_at: any, id: string, name: string, user: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined } };

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = { __typename?: 'query_root', group: Array<{ __typename?: 'group', created_at: any, id: string, name: string, user: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined } }> };

export type GetGroupByIdQueryVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type GetGroupByIdQuery = { __typename?: 'query_root', group: Array<{ __typename?: 'group', created_at: any, id: string, name: string, user: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined } }> };

export type PublicTaskFragment = { __typename?: 'task', id: string, icon: string, content: any, title: string, created_at: any, updated_at: any, user: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined }, userByUpdatedBy: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined } };

export type GetGroupTaskQueryVariables = Exact<{
  groupId: Scalars['uuid'];
}>;


export type GetGroupTaskQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', id: string, icon: string, content: any, title: string, created_at: any, updated_at: any, user: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined }, userByUpdatedBy: { __typename?: 'user', id: string, name?: string | null | undefined, image?: string | null | undefined } }> };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: string, name?: string | null | undefined, createdAt: any, updatedAt: any, email: string, emailVerified?: any | null | undefined, image?: string | null | undefined }> };

export const PublicUserFragmentDoc = gql`
    fragment PublicUser on user {
  id
  name
  image
}
    `;
export const PublicGroupFragmentDoc = gql`
    fragment PublicGroup on group {
  created_at
  id
  name
  user {
    ...PublicUser
  }
}
    ${PublicUserFragmentDoc}`;
export const PublicTaskFragmentDoc = gql`
    fragment PublicTask on task {
  id
  icon
  content
  title
  user {
    ...PublicUser
  }
  userByUpdatedBy {
    ...PublicUser
  }
  created_at
  updated_at
}
    ${PublicUserFragmentDoc}`;
export const GetGroupsDocument = gql`
    query getGroups {
  group {
    ...PublicGroup
  }
}
    ${PublicGroupFragmentDoc}`;

export function useGetGroupsQuery(options: Omit<Urql.UseQueryArgs<GetGroupsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGroupsQuery>({ query: GetGroupsDocument, ...options });
};
export const GetGroupByIdDocument = gql`
    query getGroupById($groupId: uuid!) {
  group(where: {id: {_eq: $groupId}}) {
    ...PublicGroup
  }
}
    ${PublicGroupFragmentDoc}`;

export function useGetGroupByIdQuery(options: Omit<Urql.UseQueryArgs<GetGroupByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGroupByIdQuery>({ query: GetGroupByIdDocument, ...options });
};
export const GetGroupTaskDocument = gql`
    query getGroupTask($groupId: uuid!) {
  task(where: {group_id: {_eq: $groupId}}) {
    ...PublicTask
  }
}
    ${PublicTaskFragmentDoc}`;

export function useGetGroupTaskQuery(options: Omit<Urql.UseQueryArgs<GetGroupTaskQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGroupTaskQuery>({ query: GetGroupTaskDocument, ...options });
};
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  user {
    id
    name
    createdAt
    updatedAt
    email
    emailVerified
    image
  }
}
    `;

export function useGetCurrentUserQuery(options: Omit<Urql.UseQueryArgs<GetCurrentUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCurrentUserQuery>({ query: GetCurrentUserDocument, ...options });
};