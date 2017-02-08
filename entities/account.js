'use strict'
function Account(initialBalance) {

  this.deposit = function(amount) {
    this.balance = this.balance + amount;
  }

  this.withdraw = function(amount) {
    if (this.balance >= amount)
      this.balance = this.balance - amount;
  }

  this.__isNumeric = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  if (this.__isNumeric(initialBalance)) {
      this.balance = parseFloat(initialBalance);
  }
  else {
    this.balance = 0.0;
  }
}

module.exports = {
  create: function(initialBalance) {
    return new Account(initialBalance);
  }
}
