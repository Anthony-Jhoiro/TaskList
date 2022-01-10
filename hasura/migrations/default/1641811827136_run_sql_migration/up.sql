CREATE OR REPLACE VIEW "public"."user_groups_view" AS 
 SELECT user_id, g.* FROM user_group ug LEFT JOIN "group" g on g.id = ug.group_id;
