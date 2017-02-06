# test-bdd-cucumber
A test-run for CucumberJS and istanbul

## What is it about
This project is a practical test-run for applying **Behaviour-Driven Development** (BDD from now on) to a Node.js project and integrating the [CucumberJS](https://cucumber.io) resulting tests with a widely known coverage measuring tool, [Istanbul](https://github.com/gotwarlost/istanbul).

## The system under test
The system under test (SUT from now on) is an account entity that does not support overdrafts. It has been developed by following BDD to the full extent "from outside to inside" (Features First, Tests Next, and last the actual SUT) and the account code is just this:

```javascript
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
```

I lazily and nastily borrowed `_isNumeric` [from this question on Stack Overflow](http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric) whose best answer is flagged as by community wiki and [CMS](http://stackoverflow.com/users/5445). Kudos to community wiki and CMS!

## How to use
Clone the repository, and run the following:

```
npm install
npm run test      # To run only the CucumberJS feature suite
npm run coverage  # To run istanbul over the feature suite, all at a time.
```

## Where to find the key points of this (shortcut for the impatient)
Take a look at the CucumberJS `.feature` files in the directory `./features/` and how to convert them into actions in the `*.js` files inside `./features/step_definitions/` directory. The ones named `account_behavior.feature` and `account_behavior.steps.js` are specially interesting to see how powerful can be to specify the so called "**Scenario Outline**s".

A blog post covering this in proper detail will be soon available (today is 2017-02-06) in my [Github pages blog](http://gvisoc.com).
