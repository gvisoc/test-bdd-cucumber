Feature: an account with a certain balance can increment it by means of a deposit.
  As a user
  I want to increment an account balance
  So that it has more money

  Scenario: amount added to an empty account
    Given an empty account
    When a deposit is made
    Then the balance grows to be exactly the deposited amount

  Scenario: amount added to a non-empty account
    Given an account with a positive balance
    When a deposit is made
    Then the balance grows to be the prior existing balance plus the deposited amount
