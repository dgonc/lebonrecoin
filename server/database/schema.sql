create table user (
    id int primary key auto_increment not null,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address_number VARCHAR(10) NOT NULL,
    address VARCHAR(50) NOT NULL,
    postal_code VARCHAR(5) not null,
    city VARCHAR(30) NOT NULL,
    email varchar(255) not null unique,
    password varchar(255) not null
);

INSERT INTO
    user (
        lastname,
        firstname,
        phone,
        address_number,
        address,
        postal_code,
        city,
        email,
        password
    )
VALUES (
        "Goncalves",
        "David",
        "0606060606",
        "3bis",
        "route de query",
        "89000",
        "Auxerre",
        "david@gmail.com",
        "bgdu89"
    ),
    (
        "Le",
        "User",
        "0707070707",
        "7ter",
        "rue de la tarte",
        "89250",
        "Gurgy",
        "le_user@gmail.com",
        "userdu89"
    );

create table item (
    id int primary key auto_increment not null,
    name varchar(255) not null,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    publication_date DATE NOT NULL,
    picture_1 VARCHAR(255),
    picture_2 VARCHAR(255),
    picture_3 VARCHAR(255),
    picture_4 VARCHAR(255),
    user_id int not null,
    foreign key (user_id) references user (id)
);

INSERT INTO
    item (
        name,
        description,
        price,
        publication_date,
        picture_1,
        picture_2,
        picture_3,
        picture_4,
        user_id
    )
VALUES (
        'Smartphone Galaxy X',
        'Un smartphone puissant avec un écran de 6,5 pouces et 128 Go de stockage.',
        599.99,
        '2024-01-15',
        "/server/public/assets/images/galaxy_x_1.jpg",
        NULL,
        NULL,
        NULL,
        1
    ),

(
    'Laptop Pro Max',
    'Ordinateur portable avec processeur Intel i7 et 16 Go de RAM pour une performance maximale.',
    1099.00,
    '2023-12-10',
    "/client/src/assets/images/laptop_pro_max_1.jpg",
    NULL,
    NULL,
    NULL,
    2
),

(
    'Casque Bluetooth',
    'Casque sans fil avec une réduction de bruit active et une autonomie de 24 heures.',
    149.99,
    '2024-02-20',
    NULL,
    NULL,
    NULL,
    NULL,
    1
),

(
    'Chaise de bureau ergonomique',
    'Chaise de bureau avec support lombaire et accoudoirs réglables pour un confort optimal.',
    249.50,
    '2023-11-30',
    NULL,
    NULL,
    NULL,
    NULL,
    2
),

(
    'Montre connectée FitTech',
    'Montre connectée avec capteurs de fitness et suivi de sommeil.',
    199.99,
    '2024-01-05',
    NULL,
    NULL,
    NULL,
    NULL,
    1
),

(
    'Télévision 4K 55 pouces',
    'Télévision ultra haute définition avec écran LED 4K et prise en charge HDR.',
    699.99,
    '2024-03-10',
    NULL,
    NULL,
    NULL,
    NULL,
    2
),

(
    'Aspirateur robot',
    'Aspirateur intelligent avec navigation laser pour un nettoyage efficace de votre maison.',
    349.99,
    '2023-10-05',
    NULL,
    NULL,
    NULL,
    NULL,
    1
),

(
    'Sac à dos de randonnée',
    'Sac à dos résistant à l\'eau avec une capacité de 40 litres, parfait pour les randonnées.',
    89.90,
    '2023-09-25',
    NULL,
    NULL,
    NULL,
    NULL,
    2
),

(
    'Machine à café espresso',
    'Machine à café avec broyeur intégré pour préparer des espressos riches et aromatiques.',
    249.99,
    '2024-02-01',
    NULL,
    NULL,
    NULL,
    NULL,
    1
),

(
    'Vélo électrique CityX',
    'Vélo électrique avec une autonomie de 80 km et un moteur de 500 W.',
    1299.00,
    '2023-12-18',
    NULL,
    NULL,
    NULL,
    NULL,
    2
);