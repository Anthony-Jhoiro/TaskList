CREATE TABLE "public"."user_group" ("id" serial NOT NULL, "user_id" uuid NOT NULL, "group_id" uuid NOT NULL, PRIMARY KEY ("id") , UNIQUE ("user_id", "group_id"));
