Feature: Delete student record
    Scenario Outline: Send an API rquest to delete a student record
        Given I have access to the student API "DELETE" end point
        When I send an API request to delete a student record with the student ID "<studentid>"
        Then I get a succesful response with status code "200"

        Examples:
        |   studentid  |
        |   1001       |
