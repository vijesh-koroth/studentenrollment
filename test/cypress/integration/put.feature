Feature: Update a student record
    Scenario Outline: Send an API rquest to update a student record
        Given I have access to the student API "PUT" end point
        When I send an API request to update a student details "<class>" for the student id "<studentid>"
        Then I get a succesful response with status code "200"

        Examples:
        |   studentid  |    class |
        |   1001       |    4A    |