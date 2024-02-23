const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9091;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/Grocery-Genie';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());
require('./routes/routes.js')(app);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
