const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apartmentsRouter = require('./API/apartments')

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/apartments', apartmentsRouter);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const start = async () => {
    try {
        await mongoose.connect(uri);
        app.listen(port, () => {
            console.log(`Server is running on post: ${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();