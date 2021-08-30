Feature: Get student details
    Scenario Outline: Send an API rquest to get all student records
        Given I have access to the student API "GET" end point
        When I send an API request to fetch all student records
        Then I get a succesful response with status code "200"

    Scenario Outline: Get selected student details based on student id
        Given I have access to the student API "GET2" end point
        When I send an API request to get a student record based on student id "<studentid>"
        Then I get a succesful response with status code "200"

        Examples:
        |   studentid  |
        |   1001       |
