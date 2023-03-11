export class PageMain{

    LblMain = ''
    btnSigIn = 'Sign In'
    txtUserNameLogin = '#id_userLoginId'

    clickSignIn(){
        cy.contains(this.btnSigIn).click()        
    }

    showLogin(){
        cy.get(this.txtUserNameLogin)
        .should('be.visible')
        .and('be.enabled')
    }
}
