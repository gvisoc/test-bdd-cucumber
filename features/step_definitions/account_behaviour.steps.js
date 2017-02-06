'use strict';
const {defineSupportCode} = require ('cucumber');
const assert = require ('assert');

var Account = require ('../../entities/account');

defineSupportCode (function ({Given, Then, When}) {
  var myAccount;

  Given ('an account with balance {arg1:float}', function (arg1, callback) {
    myAccount = Account.create (arg1);
    callback ();
  });
  When ('I make a deposit of {arg1:float}', function (arg1, callback) {
    myAccount.deposit (arg1);
    callback ();
  });
  When ('I make a withdraw of {arg1:float}', function (arg1, callback) {
    myAccount.withdraw (arg1);
    callback ();
  });
  Then ('the account\'s balance should be {arg1:float}', function (arg1, callback) {
    assert.equal (myAccount.balance, arg1, 'The balance should be exactly ' + arg1);
    callback ();
  });
});
