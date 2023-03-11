export class PageHome{

    lblMain = '.profile-gate-label'
    btnProfile = ':nth-child(1) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon'

    showMainLabel(){
        cy.get(this.lblMain)
    }
    enterToProfile(){
        cy.get(this.btnProfile).click()
    }
    
}