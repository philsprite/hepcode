require("dotenv").config({ path: __dirname + '/../.env' });  // __dirname sorgt dafür, dass der Pfad relativ zum aktuellen Verzeichnis ist
const { Pool } = require("pg");

console.log("Loaded ENV Variables:");
console.log("PGDATABASE:", process.env.PGDATABASE);
console.log("PGUSER:", process.env.PGUSER);
console.log("PGPASSWORD:", process.env.PGPASSWORD);
console.log("PGHOST:", process.env.PGHOST);
console.log("PGPORT:", process.env.PGPORT);

const database = process.env.PGDATABASE;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

console.log("Connection String:", connectionString);  // Debugging-Statement

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end(),
};
