// dependencies
const express = require('express');
const path = require('path');
// this code says check heroku if heroku doesnt work open port 3001
const PORT = process.env.PORT || 3001;
const app = express();
// Require Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// set up data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);
app.use(htmlRoutes);
// listen for port opening return message 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});