CREATE OR REPLACE VIEW "public"."group_users_view" AS 
 SELECT group_id, u.* FROM user_group ug LEFT JOIN "user" u on u.id = ug.user_id;
