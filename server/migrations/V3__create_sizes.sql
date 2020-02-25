create table SIZES (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    slug varchar(100) not null,
    name varchar(100) not null,
    cc_id uuid,
    UNIQUE (slug, cc_id),
    FOREIGN KEY (cc_id) REFERENCES CLOTHES_CATEGORIES (id)
);

WITH cc AS (
    SELECT
        id as tops_id
    FROM clothes_categories
    WHERE slug = 'tops'
)
insert into SIZES (cc_id, slug, name) values
((select tops_id from cc), 'xxs', 'US XXS / EU 40'),
((select tops_id from cc), 'xs', 'US XS / EU 42 / 0'),
((select tops_id from cc), 's', 'US S / EU 44-46 / 1'),
((select tops_id from cc), 'm', 'US M / EU 48-50 / 2'),
((select tops_id from cc), 'l', 'US L / EU 52-54 / 3'),
((select tops_id from cc), 'xl', 'US XL / EU 56 / 4'),
((select tops_id from cc), 'xxl', 'US XXL / EU 58 / 5');



WITH cc AS (
    SELECT
        id as bottoms_id
    FROM clothes_categories
    WHERE slug = 'bottoms'
)
insert into SIZES (cc_id, slug, name) values
((select bottoms_id from cc), '26', 'US 26 / EU 42'),
((select bottoms_id from cc), '27', 'US 27'),
((select bottoms_id from cc), '28', 'US 28 / EU 44'),
((select bottoms_id from cc), '29', 'US 29'),
((select bottoms_id from cc), '30', 'US 30 / EU 46'),
((select bottoms_id from cc), '31', 'US 31'),
((select bottoms_id from cc), '32', 'US 32 / EU 48'),
((select bottoms_id from cc), '33', 'US 33'),
((select bottoms_id from cc), '34', 'US 34 / EU 50'),
((select bottoms_id from cc), '35', 'US 35'),
((select bottoms_id from cc), '36', 'US 36 / EU 52'),
((select bottoms_id from cc), '37', 'US 37'),
((select bottoms_id from cc), '38', 'US 38 / EU 54'),
((select bottoms_id from cc), '39', 'US 39'),
((select bottoms_id from cc), '40', 'US 40 / EU 56'),
((select bottoms_id from cc), '41', 'US 41'),
((select bottoms_id from cc), '42', 'US 42 / EU 58'),
((select bottoms_id from cc), '43', 'US 43'),
((select bottoms_id from cc), '44', 'US 44 / EU 60');

WITH cc AS (
    SELECT
        id as outerwear_id
    FROM clothes_categories
    WHERE slug = 'outerwear'
)
insert into SIZES (cc_id, slug, name) values
((select outerwear_id from cc), 'xxs', 'US XXS / EU 40'),
((select outerwear_id from cc), 'xs', 'US XS / EU 42 / 0'),
((select outerwear_id from cc), 's', 'US S / EU 44-46 / 1'),
((select outerwear_id from cc), 'm', 'US M / EU 48-50 / 2'),
((select outerwear_id from cc), 'l', 'US L / EU 52-54 / 3'),
((select outerwear_id from cc), 'xl', 'US XL / EU 56 / 4'),
((select outerwear_id from cc), 'xxl', 'US XXL / EU 58 / 5');

WITH cc AS (
    SELECT
        id as footwear_id
    FROM clothes_categories
    WHERE slug = 'footwear'
)
insert into SIZES (cc_id, slug, name) values
((select footwear_id from cc), '5', 'US 5 / EU 37'),
((select footwear_id from cc), '5.5', 'US 5.5 / EU 38'),
((select footwear_id from cc), '6', 'US 6 / EU 39'),
((select footwear_id from cc), '6.5', 'US 6.5 / EU 39-40'),
((select footwear_id from cc), '7', 'US 7 / EU 40'),
((select footwear_id from cc), '7.5', 'US 7.5 / EU 40-41'),
((select footwear_id from cc), '8', 'US 8 / EU 41'),
((select footwear_id from cc), '8.5', 'US 8.5 / EU 41-42'),
((select footwear_id from cc), '9', 'US 9 / EU 42'),
((select footwear_id from cc), '9.5', 'US 9.5 / EU 42-43'),
((select footwear_id from cc), '10', 'US 10 / EU 43'),
((select footwear_id from cc), '10.5', 'US 10.5 / EU 43-44'),
((select footwear_id from cc), '11', 'US 11 / EU 44'),
((select footwear_id from cc), '11.5', 'US 11.5 / EU 44-45'),
((select footwear_id from cc), '12', 'US 12 / EU 45'),
((select footwear_id from cc), '12.5', 'US 12.5 / EU 45-46'),
((select footwear_id from cc), '13', 'US 13 / EU 46'),
((select footwear_id from cc), '14', 'US 14 / EU 47'),
((select footwear_id from cc), '15', 'US 15 / EU 48');

WITH cc AS (
    SELECT
        id as tailoring_id
    FROM clothes_categories
    WHERE slug = 'tailoring'
)
insert into SIZES (cc_id, slug, name) values
((select tailoring_id from cc), '34s', '34S'),
((select tailoring_id from cc), '34r', '34R'),
((select tailoring_id from cc), '36s', '36S'),
((select tailoring_id from cc), '36r', '36R'),
((select tailoring_id from cc), '38s', '38S'),
((select tailoring_id from cc), '38r', '38R'),
((select tailoring_id from cc), '38l', '38L'),
((select tailoring_id from cc), '40s', '40S'),
((select tailoring_id from cc), '40r', '40R'),
((select tailoring_id from cc), '40l', '40L'),
((select tailoring_id from cc), '42s', '42S'),
((select tailoring_id from cc), '42r', '42R'),
((select tailoring_id from cc), '42l', '42L'),
((select tailoring_id from cc), '44s', '44S'),
((select tailoring_id from cc), '44r', '44R'),
((select tailoring_id from cc), '44l', '44L'),
((select tailoring_id from cc), '46s', '46S'),
((select tailoring_id from cc), '46r', '46R'),
((select tailoring_id from cc), '46l', '46L'),
((select tailoring_id from cc), '48s', '48S'),
((select tailoring_id from cc), '48r', '48R'),
((select tailoring_id from cc), '48l', '48L'),
((select tailoring_id from cc), '50s', '50S'),
((select tailoring_id from cc), '50r', '50R'),
((select tailoring_id from cc), '50l', '50L'),
((select tailoring_id from cc), '52s', '52S'),
((select tailoring_id from cc), '52r', '52R'),
((select tailoring_id from cc), '52l', '52L'),
((select tailoring_id from cc), '54r', '54R'),
((select tailoring_id from cc), '54l', '54L');

WITH cc AS (
    SELECT
        id as accessories_id
    FROM clothes_categories
    WHERE slug = 'accessories'
)
insert into SIZES (cc_id, slug, name) values
((select accessories_id from cc), 'one-size', 'ONE SIZE'),
((select accessories_id from cc), '26', '26'),
((select accessories_id from cc), '28', '28'),
((select accessories_id from cc), '30', '30'),
((select accessories_id from cc), '32', '32'),
((select accessories_id from cc), '34', '34'),
((select accessories_id from cc), '36', '36'),
((select accessories_id from cc), '38', '38'),
((select accessories_id from cc), '40', '40'),
((select accessories_id from cc), '42', '42'),
((select accessories_id from cc), '44', '44'),
((select accessories_id from cc), '46', '46');
