const fs = require('fs');
const path = require('path');
const express = require('express');
const { engine } = require('express/lib/application');
const res = require('express/lib/response');

const app = express(); //app to run using express()

app.use(express.static(path.join(__dirname, './public'))) //use these static files

app.set('views', path.join(__dirname, './views')); //set views equal to this path
app.set('view engine', 'ejs'); //set view engine equal to ejs

//read account data
const accountData = fs.readFileSync('src/json/accounts.json','utf8');
const accounts = JSON.parse(accountData);
//read user data
const userData = fs.readFileSync('src/json/users.json','utf8');
const users = JSON.parse(userData);

//index route
app.get('/', (request, response) => {
  response.render('index', {
    title:'Account Summary',
    accounts,
  });
}); 

//account routes:
//savings route
app.get('/savings', (request, response) => {
  response.render('account', {
    account: accounts.savings
  });
});

//credit route
app.get('/credit', (request, response) => {
  response.render('account', {
    account: accounts.credit
  });
});

//checking route
app.get('/checking', (request, response) => {
  response.render('account', {
    account: accounts.checking
  });
});

//profile route
app.get('/profile', (request, response) => {
  response.render('profile', {
    user: users[0]
  });
});

//server
app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});