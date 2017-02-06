'use strict';
const {defineSupportCode} = require ('cucumber');
const assert = require ('assert');

var Account = require ('../../entities/account');

defineSupportCode (function ({Given, Then, When}) {
  var myAccount;

  Given (/^an empty account$/, function (callback) {
    myAccount = Account.create (); // an empty account
    callback ();
  });

  Given (/^an account with a positive balance$/, function (callback) {
    myAccount = Account.create (100);
    callback ();
  });

  When (/^a deposit is made$/, function (callback) {
    myAccount.deposit (2);
    callback ();
  });

  Then (/^the balance grows to be exactly the deposited amount$/, function (callback) {
    assert.equal (myAccount.balance, 2, 'The account\'s balance should be exactly 2');
    callback ();
  });

  Then (/^the balance grows to be the prior existing balance plus the deposited amount$/,
    function (callback) {
      assert.equal (myAccount.balance, 102, 'The account\'s balance should be exactly 102');
      callback ();
  });
});
