/* eslint max-statements: "off", new-cap: "off" */
'use strict';
const {defineSupportCode} = require('cucumber');
const assert = require('assert');
var Account = require('../../entities/account');

defineSupportCode(({Given, Then, When}) => {
  var myAccount = null;

  Given(/^an empty account$/, (callback) => {
    myAccount = Account.create();
    callback();
  });

  Given(/^an account with a positive balance$/, (callback) => {
    myAccount = Account.create(100);
    callback();
  });

  When(/^a deposit is made$/, (callback) => {
    myAccount.deposit(2);
    callback();
  });

  Then(/^the balance grows to be exactly the deposited amount$/, (callback) => {
    assert.equal(myAccount.balance, 2, 'The account\'s balance should be exactly 2');
    callback();
  });

  Then(/^the balance grows to be the prior existing balance plus the deposited amount$/,
    (callback) => {
      assert.equal(myAccount.balance, 102, 'The account\'s balance should be exactly 102');
      callback();
  });
});
