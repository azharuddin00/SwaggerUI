Feature: Festivals

    Checking Number of Festivals and  Bands

    Scenario: Number of Festivals
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the count of Festivals and their Names

    Scenario: Number of Bands
        Given I visit festivals Page
        Then I should see a list of Festivals
        Then I should get the count of Bands and their Names