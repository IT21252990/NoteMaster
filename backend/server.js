const express = require('express');
const dotenv = require('dotenv').config();
const connectToDB = require('./src/config/dbConnection');

const app = express();
connectToDB();
app.use(express.json());


const noteRoutes = require('./src/routes/noteRoutes');


app.use("/api/notes" , noteRoutes);


const port = process.env.PORT || 5000;

app.listen(port ,  () => {
    console.log(`Server is running on port ${port}`);
});