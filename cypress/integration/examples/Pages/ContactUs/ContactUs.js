import locatorsPage from '../../../Locators/Locators'

const locatorContact = new locatorsPage();

it('khatabook',function(){
    cy.visit(locatorContact.url);
    cy.get(locatorContact.ContactNav).click();
    cy.get(locatorContact.facebook).click();
   
   

})