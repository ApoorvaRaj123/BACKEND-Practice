const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/model.url');


const app = express();
const PORT = 8001;


connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>console.log('mongodb connected'));


app.use(express.json());

app.use('/', urlRoute);

app.get("/:shortId", (req, res) => {

})

app.listen(PORT, () => {
    console.log('listening on port',PORT);
})