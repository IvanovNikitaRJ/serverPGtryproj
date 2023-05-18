const Pool = require('pg').Pool;
const pool = new Pool({
user: "postgres",
password: "fucklinux",
host: "localhost",
port: 5432,
database: node_postgres_test
}
);

module.export = pool;