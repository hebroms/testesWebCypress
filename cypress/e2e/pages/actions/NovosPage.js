import { ELEMENTS } from '../elements/NovosElements';

class NovosPage {
  validarPaginaNovos() {
    cy.url().should('include', '/novos');
    cy.get(ELEMENTS.localizacaoPagina).should('have.class', 'active').and('contain', 'Novos');
  }

  selecionarVeiculo() {
    cy.get(ELEMENTS.listaVeiculos).should('exist').and('be.visible').within(() => {
      cy.get(ELEMENTS.imgVeiculo).should('be.visible').and('not.be.disabled').first().click();
    });
  }
}

export default new NovosPage();
