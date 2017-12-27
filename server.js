// Opening requirements and dependencies
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res)=>{
  res.render('index',{});
  console.log('hi mom');
})

// routes
const routes = require('./controllers/catInsulin.js')

// app.use("/", routes);

app.listen(port, ()=>console.log(`listening on ${port}`))
