CREATE TRIGGER group_author_is_editor_trigger AFTER INSERT ON "group" FOR EACH ROW EXECUTE PROCEDURE group_author_is_editor();
