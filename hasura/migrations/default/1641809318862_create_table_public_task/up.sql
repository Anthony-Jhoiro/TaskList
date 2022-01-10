CREATE TABLE "public"."task" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "group_id" uuid NOT NULL, "title" varchar NOT NULL, "content" jsonb NOT NULL, "icon" varchar NOT NULL, "created_by" uuid NOT NULL, "updated_by" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE set null, FOREIGN KEY ("updated_by") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE set null);
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
CREATE TRIGGER "set_public_task_updated_at"
BEFORE UPDATE ON "public"."task"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_task_updated_at" ON "public"."task" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
