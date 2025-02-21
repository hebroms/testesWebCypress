import { ELEMENTS } from '../elements/HomeElements';

class HomePage {
  acessarHome() {
    cy.visit('/');
  }

  validarPaginaHome() {
    cy.url().should('contain', '/ddm-fiat-v2-dois');
  }

  acessarMenuNovos() {
    cy.get(ELEMENTS.menuPrincipal).should('exist').and('be.visible').within(() => {
      cy.get(ELEMENTS.itensMenu).contains('Novos').should('exist').and('be.visible').click();
    });
  }
}

export default new HomePage();