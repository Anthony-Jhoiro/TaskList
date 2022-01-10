
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE VIEW "public"."profile" AS
--  SELECT "user".name,
--     "user".image,
--     "user".created_at,
--     "user".id
--    FROM "user";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE VIEW public.profile AS
-- SELECT name, image, created_at from public.user;

alter table "public"."account" alter column "session_state" set not null;

alter table "public"."account" alter column "refresh_token" set not null;

alter table "public"."account" alter column "oauth_token_secret" set not null;

alter table "public"."account" alter column "oauth_token" set not null;

alter table "public"."account" drop constraint "account_user_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."account" add column "user_id" uuid
--  not null;

comment on column "public"."account"."user_id" is E'NULL';
alter table "public"."account" alter column "user_id" drop not null;
alter table "public"."account" add column "user_id" varchar;

alter table "public"."user" drop constraint "user_pkey";
alter table "public"."user"
    add constraint "User_pkey"
    primary key ("email");

alter table "public"."user" drop column "id" cascade
alter table "public"."user" drop column "id";
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

comment on column "public"."user"."id" is E'NULL';
alter table "public"."user" alter column "id" drop not null;
alter table "public"."user" add column "id" varchar;

alter table "public"."user" drop constraint "user_pkey";
alter table "public"."user"
    add constraint "User_pkey"
    primary key ("id");

alter table "public"."account"
  add constraint "account_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;

alter table "public"."user" alter column "email_verified" set not null;

alter table "public"."user" alter column "email_verified" drop not null;

alter table "public"."user" drop constraint "user_email_key";

DROP TABLE "public"."verification_token";

alter table "public"."account" drop constraint "account_user_id_fkey";

comment on TABLE "public"."user" is E'NULL';

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "email_verified" timestamptz
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "email" varchar
--  null;

alter table "public"."user" rename column "image" to "profile_picture";

alter table "public"."user" add constraint "User_google_id_key" unique (google_id);
alter table "public"."user" alter column "google_id" drop not null;
alter table "public"."user" add column "google_id" varchar;

alter table "public"."user" alter column "name" set not null;

alter table "public"."user" alter column "id" set default gen_random_uuid();
ALTER TABLE "public"."user" ALTER COLUMN "id" TYPE uuid;

DROP TABLE "public"."account";

alter table "public"."user" rename to "User";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."User" add column "profile_picture" varchar
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."User" add column "google_id" varchar
--  not null unique;

DROP TABLE "public"."User";
