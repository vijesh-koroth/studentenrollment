Feature: New student enrollment
    Scenario Outline: Send an API rquest to create new student record
        Given I have access to the student API "POST" end point
        When I send an API request to create a new student enrollment with the following details "<firstname>","<class>","<lastname>","<nationality>","<studentid>"
        Then I get a succesful response with status code "201"

        Examples:
        | firstname  | class  |    lastname  | nationality  |   studentid  |
        | Mike       | 3 A    |    Wong      |  Singapore   |   1001       |
