DROP view public.user_private;

CREATE OR REPLACE VIEW "public"."user_private" AS 
 SELECT u.* FROM public.user u;
