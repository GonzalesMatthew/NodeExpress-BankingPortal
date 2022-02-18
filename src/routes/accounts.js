const express = require('express');
const { accounts } = require('../data');

const router = express.Router();

//account routes:
//savings route
router.get('/savings', (request, response) => {
  response.render('account', {
    account: accounts.savings,
  });
});

//credit route
router.get('/credit', (request, response) => {
  response.render('account', {
    account: accounts.credit,
  });
});

//checking route
router.get('/checking', (request, response) => {
  response.render('account', {
    account: accounts.checking,
  });
});

module.exports = router;