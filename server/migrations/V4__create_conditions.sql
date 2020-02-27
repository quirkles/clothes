create table CONDITIONS (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    slug varchar(100) unique not null,
    name varchar(100) not null,
    created_at date DEFAULT now(),
    updated_at date DEFAULT now()
);

insert into CONDITIONS (slug, name) values
('new', 'New/Never Worn'),
('gently-used', 'Gently Used'),
('used', 'Used'),
('worn', 'Very Worn');
