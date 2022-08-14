/// <reference types="cypress" />
import locatorsPage from '../Locators/Locators'

const locator = new locatorsPage();

it('khatabook',function(){
    cy.visit(locator.url);
    cy.wait(5000)
    cy.get(locator.joinUs).click();
    cy.wait(3000)
    cy.get(locator.toogleMenubar).click();
     cy.wait(5000)
     cy.get(locator.calculator).click();
     cy.wait(5000)
    cy.get(locator.calculatorSearch).type('calculator')
    cy.get(locator.SearchBtnClick).click();
})