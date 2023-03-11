Feature: Login to netflix

    Feature Login on netflix with credentials.

    Background:
        Given A web browser is at the netflix page
    
    Scenario: Show login page
        When A user click on SignIn button
        Then The application show the login page
    
    Scenario: Login with wrong credentials
        When A user click on SignIn button
        And A user enter incorrect username
        And A user enter incorrect password
        And A user click on SignIn button login
        Then The application show error message
    
    Scenario: Login with correct credentials
        When A user click on SignIn button
        And A user enter username
        And A user enter password
        And A user click on SignIn button login
        Then The application show home page

    Scenario: Go to Movies
        When A user click on SignIn button
        And A user enter username
        And A user enter password
        And A user click on SignIn button login
        And A user select profile
        Then The application show movies page