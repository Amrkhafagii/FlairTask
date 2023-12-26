Feature: End to end for flair task feature


    Scenario: add/delete candidate API
        When User add candidate
        Then User delete candidate


    Scenario: add/delete user
        Given User open URL
        When User login
        And User get the number of records found
        And User fill the required data
        Then User delete the new create user

