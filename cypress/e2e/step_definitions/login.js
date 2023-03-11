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

Given("A web browser is at the netflix page", () => {
  cy.visit("/");
});

When("A user click on SignIn button", () => {
  pageMain.clickSignIn()    
});

Then("The application show the login page", () => {
  pageMain.showLogin()
});

Given("A user enter incorrect username", () =>{
    pageLogin.enterUserName("IcorrectUserName"); 
});

Given("A user enter incorrect password", () =>{
   pageLogin.enterPassword("IncorrectPassword");  
});

Given("A user click on SignIn button login", () =>{
  pageLogin.clickSignIn();  
});

Then("The application show error message", () => {
  pageLogin.showError()
});

Given("A user enter username", () =>{
  pageLogin.enterUserName("INSERT USERNAME VALID"); 
});

Given("A user enter password", () =>{
 pageLogin.enterPassword("INSER PASSWORD VALID");  
});

Then("The application show home page", () => {
  pageHome.showMainLabel()
});

Given("A user select profile", () =>{
  pageHome.enterToProfile()
 });

 Then("The application show movies page", () => {
  pageMovies.showMainLabel()
});