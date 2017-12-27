// Opening requirements and dependencies
const express = require('express');
const bodyParser = require('bodyParser');

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

const handlebars = require("express-handlebars");

app.engine("handlebars, handlebars({ defaultLayout: "main" }));)
app.set("view engine", "handlebars");

// routes
const routes = require('./controllers/catInsulin.js')

app.listen(port, ()=>console.log(`listening on ${port}`))
