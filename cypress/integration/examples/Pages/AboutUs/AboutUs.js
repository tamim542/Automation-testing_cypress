import locatorsPage from "../../../Locators/Locators";

const locatorAbout= new locatorsPage();

it('khatabook',function(){
    cy.visit(locatorAbout.url);
    cy.get(locatorAbout.aboutUs).click();
    cy.get(locatorAbout.videoAbout).click();
    cy.wait(5000);
    cy.get(locatorAbout.videoYoutube).click();
    cy.get(locatorAbout.menRightArrow).click();
    cy.wait(5000)
    cy.get(locatorAbout.menLeftArrow).click();

})