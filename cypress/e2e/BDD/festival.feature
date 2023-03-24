Feature: Festivals

    Checking Number of Festivals and  Bands

    Scenario: Number of Festivals
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the count of Festivals

    Scenario: Number of Bands
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the count of Bands

    
    Scenario: Festival Names
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the Names of Festivals

    
    Scenario: Band Names
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the Names of Bands
    