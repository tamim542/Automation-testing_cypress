import locatorsPage from "../../../Locators/Locators";

const ourApp= new locatorsPage();

it('ourapp',function(){
    cy.visit(ourApp.url);
    cy.get(ourApp.ourAppNav).click();
    cy.wait(5000);
    cy.get(ourApp.learnMoreOne).click();
    cy.wait(5000);
    cy.get(ourApp.learnMoreTwo).click();
    cy.wait(5000);
})