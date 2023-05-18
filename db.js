const Pool = require('pg').Pool;

const pool = new Pool({
user: "postgres",
password: "fucklinux",
host: "localhost",
port: 5432,
database: "nodejs_postgresql_test"
}
);

module.exports = pool;