CREATE FUNCTION group_author_is_editor()
RETURNS trigger AS $BODY$
BEGIN
INSERT INTO user_group (user_id, group_id) VALUES (NEW.created_by, NEW.id);
RETURN NEW;
END;
$BODY$ LANGUAGE plpgsql;
