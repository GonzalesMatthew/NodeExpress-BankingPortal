const fs = require('fs');
const path = require('path');
const express = require('express');
const { engine } = require('express/lib/application');
const res = require('express/lib/response');

const app = express(); //app to run using express()

app.use(express.static(path.join(__dirname, './public'))) //use these static files

app.set('views', path.join(__dirname, './views')); //set views equal to this path
app.set('view engine', 'ejs'); //set view engine equal to ejs

app.get('/', (request, response) => {
  response.render('index', {title:'Index'});
}); //build the root, i.e. index, route

app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});