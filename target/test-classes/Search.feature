

Feature: To verify the search functionality of application

Background:
Given user launch the application
And user enter username and password
And user click login button
And user sees the Home page of application
    

 Scenario Outline: To verify the search relevance for the search functionality
    When user enter the "<search>"product
    And user click search button
    Then user sees the result based on "<search>" selected product
    
    Examples:
    |search|
    |Fabric Activity Book |
    |Brambling Hedgehog |
    |Pull Elephant Abacus|
    
    
    

