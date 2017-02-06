'use strict'
function Account (initialBalance) {
  this.deposit = function (amount) {
    this.balance = this.balance + amount;
  };
  this.withdraw = function (amount) {
    if (this.balance >= amount)
      this.balance = this.balance - amount;
  }
  this._isNumeric = function (n) {
    return !isNaN (parseFloat (n)) && isFinite (n);
  };

  if (this._isNumeric (initialBalance)){
      this.balance = parseFloat (initialBalance);
  }
  else {
    this.balance = 0.0;
  }
};

module.exports = {
  create: function (initialBalance) {
    return new Account (initialBalance);
  }
};
