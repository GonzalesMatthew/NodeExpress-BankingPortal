const fs = require('fs');
const path = require('path');

//read account data
const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const accounts = JSON.parse(accountData);

//read user data
const userData = fs.readFileSync('src/json/users.json', 'utf8');
const users = JSON.parse(userData);

//write JSON
const writeJSON = () => {
  var accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(
    path.join(__dirname, './json/accounts.json'),
    accountsJSON,
    'utf8'
  );
};

module.exports = {accounts, users, writeJSON};