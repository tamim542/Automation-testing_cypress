import locatorsPage from '../../../Locators/Locators';

const newsRoom= new locatorsPage();

it('newsRoom',function(){
    cy.visit(newsRoom.url);
    cy.get(newsRoom.newsRoomNav).click();

})
