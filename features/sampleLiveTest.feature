Feature:  Sample Live Test Scenario 



Scenario: test login
    Given I am on the login page
    When  I login with <username> and <password>
    Then I should see a welcome message
 Examples:
      |username| password |
      |test68681|test12345|
      
Scenario: add the product into the cart
    Given click on any product
    When selected on product
    Then Add that product into cart 


Scenario: Proceed to the checkout page and continue till payments
    Given click on checkout Button
    When Hit Confirm order
    Then verify your ORDER has been Proceed and click continue 