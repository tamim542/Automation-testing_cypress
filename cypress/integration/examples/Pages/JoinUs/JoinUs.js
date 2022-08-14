import locatorsPage from "../../../Locators/Locators";

const joinUs= new locatorsPage();

it('Join Us', function(){
    cy.visit(joinUs.url);
    cy.get(joinUs.joinUsNav).click();
    cy.get(joinUs.checkAll).click();
    cy.get(joinUs.navAnalytics).click();
    cy.get(joinUs.apply).click();
})