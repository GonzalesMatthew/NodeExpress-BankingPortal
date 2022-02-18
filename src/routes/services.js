const express = require('express');
const { accounts, writeJSON } =  require('../data');

const router = express.Router();

//transfer route
router.get('/transfer', (request, response) => {
  response.render('transfer', {});
});

router.post('/transfer', (request, response) => {
  //submitted form: from, to, amount
  //accounts object: accounts['savings'].balance

  //'from' balance:
  accounts[request.body.from].balance =
    accounts[request.body.from].balance - request.body.amount;
  //'to' balance:
  accounts[request.body.to].balance =
    accounts[request.body.to].balance + parseInt(request.body.amount);

  writeJSON();

  response.render('transfer', {
    message: 'Transfer Completed',
  });
});

//payment route
router.get('/payment', (request, response) => {
  response.render('payment', {
    account: accounts.credit,
  });
});

router.post('/payment', (request, response) => {
  accounts.credit.balance = accounts.credit.balance - request.body.amount;
  accounts.credit.available =
    parseInt(accounts.credit.available) + parseInt(request.body.amount);
  writeJSON();
  response.render('payment', {
    message: 'Payment Successful',
    account: accounts.credit,
  });
});

module.exports = router;