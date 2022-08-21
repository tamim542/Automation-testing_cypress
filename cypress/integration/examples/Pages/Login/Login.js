import locatorsPage from "../../../Locators/Locators";

const login = new locatorsPage();



it('Login ', function(){

   

    cy.visit(login.url);
    cy.get(login.joinUsNav).click();
    cy.get(login.toogleMenubar).click();
    cy.wait(5000);
    // cy.get(login.LoginNav).invoke('removeAttr', 'target').click();
    cy.wait(5000);
   

   
    let newUrl = '';
    cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen').callsFake(url => {
      newUrl = url;
          });
        })
        
    cy.get(login.LoginNav).click({force: true})
    cy.wait(5000);  
    cy.get('@windowOpen').should('be.called');
    

    cy.xpath('//*[@id="phone"]').type('01989');
    // cy.xpath(login.countrySelected).click();
    cy.wait(5000);
})