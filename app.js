const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('app started at ${PORT}'));
