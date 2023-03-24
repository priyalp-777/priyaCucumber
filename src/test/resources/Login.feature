
Feature: To verify the login functionality in application

Background:
    Given user launch the application

Scenario: To verify login using valid credentials
    When user enter username and password
    And user click login button
    Then user sees the Home page of application
    
    
Scenario: To verify login using invalid credentials
    When user enter username and password with invalid
    And user click login button 
    Then user sees the error message 

