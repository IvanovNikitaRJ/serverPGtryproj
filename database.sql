CREATE TABLE persones 
(
    id SERIAL PRIMARY KEY,
    login VARCHAR (30),
    pass VARCHAR (30),
    email VARCHAR (30)
);

CREATE TABLE post 
(
    id SERIAL PRIMARY KEY,
    title VARCHAR (30),
    content VARCHAR (30),
    persones_id INTEGER,
    FOREIGN KEY (persones_id) REFERENCES persones (id)
);
