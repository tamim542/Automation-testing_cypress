import locatorsPage from "../../../Locators/Locators";

const ourApp= new locatorsPage();

it('ourapp',function(){
    cy.visit(ourApp.url);
    cy.get(ourApp.ourAppNav).click();
    cy.get(ourApp.learnMoreOne).click();
    cy.get(ourApp.learnMoreTwo).click();
})