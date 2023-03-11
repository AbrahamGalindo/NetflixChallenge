Feature: Movies actions

    Feature actions into the movie page.

    Background:
    Given A web browser is at the netflix page and go to movies page

    Scenario: Search any movie
        When A user search some movie
        Then The application show the movie
    
    Scenario: Search any movie and clear searched
        When A user search some movie
        Then The application show the movie
        Then A user click on clear search

    Scenario: Add movie to list
        When A user search some movie
        And A user select the movie
        And A user add to list
        Then The icon to add changed

    Scenario: Remove movie to list
        When A user search some movie
        And A user select the movie
        And A user add to list
        And A user remove from list
        Then The icon to add is show