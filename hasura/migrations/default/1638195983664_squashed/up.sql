
CREATE TABLE "public"."User" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_User_updated_at"
BEFORE UPDATE ON "public"."User"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_User_updated_at" ON "public"."User" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."User" add column "google_id" varchar
 not null unique;

alter table "public"."User" add column "profile_picture" varchar
 null;

alter table "public"."User" rename to "user";

CREATE TABLE "public"."account" ("type" varchar NOT NULL, "provider" varchar NOT NULL, "provider_account_id" varchar NOT NULL, "refresh_token" varchar NOT NULL, "access_token" varchar, "expires_at" integer, "token_type" varchar, "scope" varchar NOT NULL, "id_token" varchar NOT NULL, "user_id" varchar NOT NULL, "oauth_token_secret" varchar NOT NULL, "oauth_token" varchar NOT NULL, "session_state" varchar NOT NULL, "id" serial NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."account" IS E'The Account model is for information about OAuth accounts associated with a User. It will usually contain access_token, id_token and other OAuth specific data. TokenSet from openid-client might give you an idea of all the fields.';

ALTER TABLE "public"."user" ALTER COLUMN "id" TYPE varchar;
ALTER TABLE "public"."user" ALTER COLUMN "id" drop default;

alter table "public"."user" alter column "name" drop not null;

alter table "public"."user" drop column "google_id" cascade;

alter table "public"."user" rename column "profile_picture" to "image";

alter table "public"."user" add column "email" varchar
 null;

alter table "public"."user" add column "email_verified" timestamptz
 null;

comment on TABLE "public"."user" is E'NULL';

alter table "public"."account"
  add constraint "account_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;

CREATE TABLE "public"."verification_token" ("token" varchar NOT NULL, "expires" timestamptz NOT NULL, "identifier" varchar NOT NULL, PRIMARY KEY ("token") , UNIQUE ("token"));

alter table "public"."user" add constraint "user_email_key" unique ("email");

alter table "public"."user" alter column "email_verified" set not null;

alter table "public"."user" alter column "email_verified" drop not null;

alter table "public"."account" drop constraint "account_user_id_fkey";

BEGIN TRANSACTION;
ALTER TABLE "public"."user" DROP CONSTRAINT "User_pkey";

ALTER TABLE "public"."user"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("email");
COMMIT TRANSACTION;

alter table "public"."user" drop column "id" cascade;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."user" add column "id" uuid
 not null unique default gen_random_uuid();

BEGIN TRANSACTION;
ALTER TABLE "public"."user" DROP CONSTRAINT "User_pkey";

ALTER TABLE "public"."user"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

alter table "public"."account" drop column "user_id" cascade;

alter table "public"."account" add column "user_id" uuid
 not null;

alter table "public"."account"
  add constraint "account_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;

alter table "public"."account" alter column "oauth_token" drop not null;

alter table "public"."account" alter column "oauth_token_secret" drop not null;

alter table "public"."account" alter column "refresh_token" drop not null;

alter table "public"."account" alter column "session_state" drop not null;

CREATE VIEW public.profile AS
SELECT name, image, created_at from public.user;

CREATE OR REPLACE VIEW "public"."profile" AS 
 SELECT "user".name,
    "user".image,
    "user".created_at,
    "user".id
   FROM "user";
