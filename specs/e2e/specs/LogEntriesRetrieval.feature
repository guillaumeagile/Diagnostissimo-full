Feature: Log entry display

    I want to check log entries data retrieval

    Scenario: Log data are displayed
        Given the home page is loaded with following values
            | uid | product     | entryDate           | ariaUser | windowsLogin | machine  | content  | error  | entryStatus | requestUID |
            | 123 | My product  | 2019-12-19T08:00:15 | John     | jdoe         | machine1 | content1 | error1 | SUCCESS     | 123        |
            | 456 | my product2 | 2019-12-19T08:00:15 | Jack     | jbauer       | machine2 | content2 | error2 | ERROR       | 456        |
            | 789 | My product3 | 2019-12-19T08:00:15 | Bill     | bpull        | machine3 | content3 | error3 | ERROR       | 789        |
        Then there are 3 log entries

    Scenario: Check success entry
        Given the home page is loaded with following values
            | uid | product    | entryDate           | ariaUser | windowsLogin | machine  | content  | error  | entryStatus | requestUID |
            | 123 | My product | 2019-12-19T08:00:15 | John     | jdoe         | machine1 | content1 | error1 | SUCCESS     | 123        |
        Then the 1st list entry is 'Success - 2019-12-19T08:00:15 : Document successfully inserted by John (jdoe) on machine1'

    Scenario: Check failure entry
        Given the home page is loaded with following values
            | uid | product    | entryDate           | ariaUser | windowsLogin | machine  | content  | error  | entryStatus | requestUID |
            | 123 | My product | 2019-12-19T08:00:15 | John     | jdoe         | machine1 | content1 | error1 | ERROR       | 123        |
        Then the 1st list entry is 'Failure - 2019-12-19T08:00:15 : Document insertion failure by John (jdoe) on machine1'
