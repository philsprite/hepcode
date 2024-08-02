require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const bodyParser = require('body-parser'); // Body-Parser zum Parsen von JSON-Daten
const pool = require(__dirname + "/config/db.config.js");
const cors = require('cors'); // CORS, um Anfragen vom Frontend zuzulassen

const app = express();

const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Functions
const getProducts = (req, res) => {
    pool.query('SELECT * FROM products', (error, products) => {
        if (error) {
            throw error
        }
        res.status(200).json(products.rows)
    })
}

// Neue Funktion zum Speichern der Kontaktformular-Daten
const saveContact = async (req, res) => {
    const { firstName, lastName, email, website, message } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO contacts (first_name, last_name, email, website, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [firstName, lastName, email, website, message]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving contact data' });
    }
};

// Here you can add your routes
// Here's an example
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/products', getProducts);

// Neue Route für das Kontaktformular
app.post('/api/contact', saveContact);

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});
