import locatorsPage from "../../../Locators/Locators";

const login = new locatorsPage();

it('Login ', function(){
    cy.visit(login.url);
    cy.get(login.joinUsNav).click();
    cy.get(login.toogleMenubar).click();
    cy.get(login.LoginNav).click();
})