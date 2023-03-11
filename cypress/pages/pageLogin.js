export class PageLogin{

    txbxUserName = '.nfEmailPhoneControls > .input_id > .placeLabel'
    txbxPassword = '#id_password'
    btnSigIn = '.btn'
    lblError = '.ui-message-contents'

    enterUserName(userName){
        cy.get(this.txbxUserName).type(userName)
    }
    enterPassword(password){
        cy.get(this.txbxPassword).type(password)
    }
    clickSignIn(){
        cy.get(this.btnSigIn).click()
    }
    showError(){
        cy.get(this.lblError)
    }
}
