import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {PageMain} from "@pages/pageMain"
  import {PageLogin} from "@pages/pageLogin"
  import {PageHome} from "@pages/pageHome"
  import {PageMovies} from "@pages/pageMovies"
  
  const pageMain = new PageMain
  const pageLogin = new PageLogin
  const pageHome = new PageHome
  const pageMovies = new PageMovies

  Given("A web browser is at the netflix page and go to movies page", () => {
    cy.visit("/");
    pageMain.clickSignIn()  
    pageLogin.enterUserName("INSERT USERNAME VALID");  
    pageLogin.enterPassword("INSERT PASSWORD VALID");  
    pageLogin.clickSignIn();  
    pageHome.enterToProfile()
  });
  
  When("A user search some movie", () => {
    pageMovies.searchMovie("The walking death")    
  });
  
  Then("The application show the movie", () => {
    pageMovies.showMovie("The Walking Dead")
  });

  Then("A user click on clear search", () => {
    pageMovies.clearSearch()
  });

  Given("A user select the movie", () => {
    pageMovies.selectMovie("The Walking Dead")
  });

  Given("A user add to list", () => {
    pageMovies.addMovieToList("The Walking Dead")
  });

  Then("Then The icon to add changed", () => {
    pageMovies.showRemoveFromListIcon()
  });
 
  Given("A user remove from list", () => {
    pageMovies.removeFromList("The Walking Dead")
  });
 
  Then("The icon to add is show", () => {
    pageMovies.showAddToList()
  });