# test-bdd-cucumber [![Build Status](https://travis-ci.org/gvisoc/test-bdd-cucumber.svg?branch=master)](https://travis-ci.org/gvisoc/test-bdd-cucumber) [![Coverage Status](https://coveralls.io/repos/github/gvisoc/test-bdd-cucumber/badge.svg?branch=master)](https://coveralls.io/github/gvisoc/test-bdd-cucumber?branch=master)
A test-run for CucumberJS and Istanbul, sending reports to Coveralls through Travis CI.

## What is it about
This project is a practical test-run for applying **Behaviour-Driven Development** (BDD from now on) to a Node.js project and integrating the [CucumberJS](https://cucumber.io) resulting tests with a widely known coverage measuring tool, [Istanbul](https://github.com/gotwarlost/istanbul). The reports are sent to [Coveralls.io](https://coveralls.io) through a build in [Travis CI](https://travis-ci.org).

## The system under test
The system under test (SUT from now on) is an account entity that does not support overdrafts. It has been developed by following BDD to the full extent "from outside to inside" (Features First, Tests Next, and last the actual SUT) and the account code is just this:

```javascript
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
```

I lazily and nastily borrowed `__isNumeric` [from this question on Stack Overflow](http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric) whose best answer is flagged as by community wiki and [CMS](http://stackoverflow.com/users/5445). Kudos to community wiki and CMS!

## How to use
Clone the repository, and run the following:

```
npm install
npm run test      # To run only the CucumberJS feature suite
npm run coverage  # To run istanbul over the feature suite, all at a time, locally (no coveralls report sending).
```
Sending the reports to Coveralls is done through Travis CI currently (which runs `npm run coveralls`), because that way I don't need to manually set up tokens. See `package.json` and `.travis.yml` to see the modules and commands regarding Travis CI and Coveralls usage.


## Where to find the key points of this (shortcut for the impatient)
Take a look at the CucumberJS `.feature` files in the directory `./features/` and how to convert them into actions in the `*.js` files inside `./features/step_definitions/` directory. The ones named `account_behavior.feature` and `account_behavior.steps.js` are specially interesting to see how powerful can be to specify the so called "**Scenario Outline**s".

