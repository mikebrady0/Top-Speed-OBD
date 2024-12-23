const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

// Schema
const lookupSchema = new mongoose.Schema({
    year: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    code: { type: String, required: true },
    result: {type: String, required: true },
});

const Lookup = mongoose.model('Lookup', lookupSchema);

module.exports = Lookup;

// Routes / Save Lookups
app.post('/api/lookups', async (req, res) => {
    try {
        const newLookup = new Lookup(req.body);
        await newLookup.save();
        res.status(201).json({ message: 'Lookup saved successfully!'});
    } catch (error) {
        res.status(500).json({ message: 'Error saving Lookup', error});
    }
});

app.get('/api/lookups', async (req, res) => {
    try {
        const lookups = await Lookup.find();
        res.status(200).json(lookups);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lookups', error});
    }
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
