Feature: Snapdeal Exploring
 As a user I am exploring Snapdeal

 Background:
Given I am on the  HomePage

Scenario Outline:Login using data given below and performing few operations 
When I enter <username> and <password> in the loginframe
And I reach UserPage
Then I am using filters to refine my search

Examples:
|username| |password|
|"9711133427"||"Simsim123"| 
