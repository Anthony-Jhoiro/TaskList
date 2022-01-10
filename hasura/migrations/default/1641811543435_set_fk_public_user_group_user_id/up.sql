alter table "public"."user_group"
  add constraint "user_group_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;
