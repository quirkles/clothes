create table CLOTHES (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    created_by uuid not null,
    clothes_subcategory_id uuid not null,
    brand_id uuid not null,
    size_id uuid not null,
    condition_id uuid not null,
    title varchar(255),
    color varchar(255),
    description varchar(2000),
    created_at date DEFAULT now(),
    updated_at date DEFAULT now(),
    FOREIGN KEY (created_by) REFERENCES USERS (id),
    FOREIGN KEY (size_id) REFERENCES SIZES (id),
    FOREIGN KEY (brand_id) REFERENCES BRANDS (id),
    FOREIGN KEY (condition_id) REFERENCES CONDITIONS (id),
    FOREIGN KEY (clothes_subcategory_id) REFERENCES CLOTHES_SUBCATEGORIES (id)
);
CREATE INDEX ON CLOTHES (lower(title));
CREATE INDEX ON CLOTHES (lower(description));

insert into CONDITIONS (slug, name) values
('new', 'New/Never Worn'),
('gently-used', 'Gently Used'),
('used', 'Used'),
('worn', 'Very Worn');
