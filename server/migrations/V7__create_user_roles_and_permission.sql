create table USER_ROLES (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    name varchar(200)
);
CREATE INDEX ON USER_ROLES (lower(name));

insert into USER_ROLES (name) values
('site_admin'),
('site_user');


create table USER_PERMISSIONS (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    name varchar(200)
);
CREATE INDEX ON USER_PERMISSIONS (lower(name));

insert into USER_PERMISSIONS (name) values
('can_add_type'),
('can_delete_type'),
('can_edit_type'),
('can_add_subtype'),
('can_delete_subtype'),
('can_edit_subtype'),
('can_add_condition'),
('can_delete_condition'),
('can_edit_condition'),
('can_add_brand'),
('can_delete_brand'),
('can_edit_brand'),
('can_add_clothing_item'),
('can_delete_clothing_item'),
('can_edit_clothing_item'),
('can_add_listing'),
('can_delete_listing'),
('can_edit_listing');

create table ROLES_PERMISSIONS (
    role_id uuid not null,
    permission_id uuid not null,
    UNIQUE (role_id, permission_id),
    PRIMARY KEY(role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES USER_ROLES (id),
    FOREIGN KEY (permission_id) REFERENCES USER_PERMISSIONS (id)
);
CREATE INDEX ON ROLES_PERMISSIONS (role_id);
CREATE INDEX ON ROLES_PERMISSIONS (permission_id);

WITH
    admin_role AS (SELECT id FROM USER_ROLES WHERE name = 'site_admin'),
    user_role AS (SELECT id FROM USER_ROLES WHERE name = 'site_user'),
    can_add_type_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_type'),
    can_delete_type_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_type'),
    can_edit_type_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_type'),
    can_add_subtype_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_subtype'),
    can_delete_subtype_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_subtype'),
    can_edit_subtype_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_subtype'),
    can_add_condition_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_condition'),
    can_delete_condition_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_condition'),
    can_edit_condition_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_condition'),
    can_add_brand_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_brand'),
    can_delete_brand_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_brand'),
    can_edit_brand_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_brand'),
    can_add_clothing_item_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_clothing_item'),
    can_delete_clothing_item_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_clothing_item'),
    can_edit_clothing_item_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_clothing_item'),
    can_add_listing_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_add_listing'),
    can_delete_listing_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_delete_listing'),
    can_edit_listing_perm AS (SELECT id FROM USER_PERMISSIONS where name = 'can_edit_listing')

insert into ROLES_PERMISSIONS (role_id, permission_id) values
    ((select id from admin_role),(select id from can_add_type_perm)),
    ((select id from admin_role),(select id from can_delete_type_perm)),
    ((select id from admin_role),(select id from can_edit_type_perm)),
    ((select id from admin_role),(select id from can_add_subtype_perm)),
    ((select id from admin_role),(select id from can_delete_subtype_perm)),
    ((select id from admin_role),(select id from can_edit_subtype_perm)),
    ((select id from admin_role),(select id from can_add_condition_perm)),
    ((select id from admin_role),(select id from can_delete_condition_perm)),
    ((select id from admin_role),(select id from can_edit_condition_perm)),
    ((select id from admin_role),(select id from can_add_brand_perm)),
    ((select id from admin_role),(select id from can_delete_brand_perm)),
    ((select id from admin_role),(select id from can_edit_brand_perm)),
    ((select id from admin_role),(select id from can_add_clothing_item_perm)),
    ((select id from admin_role),(select id from can_delete_clothing_item_perm)),
    ((select id from admin_role),(select id from can_edit_clothing_item_perm)),
    ((select id from admin_role),(select id from can_add_listing_perm)),
    ((select id from admin_role),(select id from can_delete_listing_perm)),
    ((select id from admin_role),(select id from can_edit_listing_perm)),

    ((select id from user_role),(select id from can_add_clothing_item_perm)),
    ((select id from user_role),(select id from can_delete_clothing_item_perm)),
    ((select id from user_role),(select id from can_edit_clothing_item_perm)),
    ((select id from user_role),(select id from can_add_listing_perm)),
    ((select id from user_role),(select id from can_delete_listing_perm)),
    ((select id from user_role),(select id from can_edit_listing_perm));

ALTER TABLE USERS
    ADD COLUMN role_id uuid REFERENCES USER_ROLES(id);

CREATE OR REPLACE FUNCTION set_role_if_required()
    RETURNS trigger AS
$BODY$
BEGIN
    IF NEW.role_id ISNULL THEN
        NEW.role_id = (SELECT id FROM USER_ROLES WHERE name = 'site_user');
    END IF;

    RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql VOLATILE;

CREATE TRIGGER set_user_role_after_insert
    BEFORE insert
    ON USERS FOR EACH ROW
EXECUTE PROCEDURE set_role_if_required();
