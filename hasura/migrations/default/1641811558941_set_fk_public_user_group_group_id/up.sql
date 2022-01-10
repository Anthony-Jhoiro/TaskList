alter table "public"."user_group"
  add constraint "user_group_group_id_fkey"
  foreign key ("group_id")
  references "public"."group"
  ("id") on update restrict on delete cascade;
