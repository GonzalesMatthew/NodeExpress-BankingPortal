const fs = require('fs');
const path = require('path');
const express = require('express');
const { engine } = require('express/lib/application');
const res = require('express/lib/response');
const { accounts, users, writeJSON} = require('./data');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

const app = express(); //app to run using express()

//middleware
app.use(express.static(path.join(__dirname, './public'))); //use these static files
app.use(express.urlencoded((extended = true)));
app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

//set variables
app.set('views', path.join(__dirname, './views')); //set views equal to this path
app.set('view engine', 'ejs'); //set view engine equal to ejs

//index route
app.get('/', (request, response) => {
  response.render('index', {
    title: 'Account Summary',
    accounts,
  });
});

//profile route
app.get('/profile', (request, response) => {
  response.render('profile', {
    user: users[0],
  });
});

//server
app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});
