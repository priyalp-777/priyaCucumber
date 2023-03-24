
Feature: To verify the functionality to add to cart of the application

Background:
Given user launch the application
And user enter username and password
And user click login button
And user sees the Home page of application

And user enter the search product 
And user click search button
And user sees the result based on search selected product
 @smoke  
Scenario Outline: To add the product to add to cart page
When user add the product "<product>" to add to cart
Then user sees the cart page
Examples:
      |product|
      |Brambling Hedgehog|

Scenario Outline: To increase the count of product in add to cart page
When user add the product to add to cart 
And user increase the count "<count>" in add to cart 
Then user sees the cart page with increase count 

Examples:
    | count|
    |  2  |

Scenario Outline: To decrease the count of product in add to cart page
When user add the product to add to cart 
And user decrease the count "<count>" in add to cart 
Then user sees the cart page with decrease count

Examples:
    | count|
    |  1  |


