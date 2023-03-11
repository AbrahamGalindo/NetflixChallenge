import "cypress-real-events";
export class PageMovies{

    lblMain = '.title-logo'
    iconSearch = '.searchTab'
    txtSearch =  '.searchBox' 
    iconClearSearch = '[aria-label="Clear input"]'
    addButton= '[aria-label="Add To My List"]'
    removeButton= '[aria-label="Remove from My List"]'
    
    showMainLabel(){
        cy.get(this.lblMain)
    }
    
    searchMovie(movie){
        cy.get(this.iconSearch).click()
        cy.get(this.txtSearch).type(movie)
    }

    showMovie(movie){
        cy.get('[aria-label="'+movie+'"]')
    }

    clearSearch(){
        cy.get(iconClearSearch).click()
    }

    selectTheMovie(movie){
        cy.get('[aria-label="'+movie+'"]').click()
    }

    addMovieToList(movie){
        cy.get('[aria-label="'+movie+'"]').realHover();
        cy.get(addButton).click()
    }

    showRemoveFromListIcon(){
        cy.get(this.removeButton)
    }

    removeFromList(movie){
        cy.get(this.removeButton),click()
    }

    showAddToList(){
        cy.get(this.removeButton)
    }
}
