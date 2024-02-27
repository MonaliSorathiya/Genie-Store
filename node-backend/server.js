const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9091;

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));
mongoose
    .connect('mongodb://127.0.0.1:27017/Genie-Store')
    .then((x) => {
        console.log(`Connected to ${x.connections[0].name}`)
    })
    .catch((err) => {
        console.error('Error occurs while connecting to the database, ', err.reason)
    })
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
