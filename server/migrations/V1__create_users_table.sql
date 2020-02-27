create table USERS (
    id uuid PRIMARY KEY not null DEFAULT uuid_generate_v1(),
    email varchar(100) not null,
    password varchar(100) not null,
    username varchar(100) unique not null,
    created_at date DEFAULT now(),
    updated_at date DEFAULT now()
);

CREATE INDEX ON USERS (id);
CREATE INDEX ON USERS (username);
