Feature: non-overdraft account balance operations
  In order to have a functional account
  As a user
  I want to be able to make deposits and withdraws

  Scenario Outline: making deposits
    Given an account with balance <bal>
    When I make a deposit of <increment>
    Then the account's balance should be <result>

    Examples:
      | bal | increment | result |
      | 100 |      5.00 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |      5.20 |  17.20 |

  Scenario Outline: making withdraws
    Given an account with balance <bal>
    When I make a withdraw of <decrement>
    Then the account's balance should be <result>

    Examples:
      |    bal | decrement | result |
      | 100.00 |         5 |     95 |
      |     99 |      1234 |     99 |
      |     12 |      5.95 |   6.05 |
