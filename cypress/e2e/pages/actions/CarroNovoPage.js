import { ELEMENTS } from '../elements/CarroNovoElements';

class CarroNovoPage {

  validarPaginaCarroNovo() {
    cy.url().should('include', '/novos/');
    cy.get(ELEMENTS.localizacaoPagina).should('have.class', 'active');
  }

  acessarFormulario(){
    cy.get(ELEMENTS.cardInformativoCarro).should('exist').should('be.visible').within(() => {
      cy.get(ELEMENTS.botaoEuQuero).should('be.visible').click();
    })
  }

  validarFormulario(){
    cy.get(ELEMENTS.formulario).should('exist').and('be.visible').within(() => {
      cy.get(ELEMENTS.headerFormulario).should('exist').and('be.visible').within(() => {
        cy.get(ELEMENTS.tituloFormularioLead).should('exist').and('be.visible').and('contain','Estou Interessado');
      });
      cy.get(ELEMENTS.bodyFormulario).should('exist').and('be.visible').within(() => {
        cy.get(ELEMENTS.descricaoFormulario).should('exist').and('be.visible').and('contain','Preencha o formulário abaixo para receber o contato de um de nossos especialistas:');
        cy.get(ELEMENTS.campoNome).should('exist').and('be.visible');
        cy.get(ELEMENTS.campoEmail).should('exist').and('be.visible');
        cy.get(ELEMENTS.campoTelefone).should('exist').and('be.visible');
        cy.get(ELEMENTS.campoCPF).should('exist').and('be.visible');
        cy.get(ELEMENTS.checkboxEmail).should('exist').and('be.visible');
        cy.get(ELEMENTS.checkboxTelefone).should('exist').and('be.visible');
        cy.get(ELEMENTS.checkboxWhatsApp).should('exist').and('be.visible');
        cy.get(ELEMENTS.botaoEnviar).should('exist').and('be.visible');
      });
    });
  }

  preencherLead(){
    cy.gerarLead().then((lead) => {
      cy.get(ELEMENTS.bodyFormulario).within(() => {
        cy.get(ELEMENTS.campoNome).type(lead.nome);
        cy.get(ELEMENTS.campoEmail).type(lead.email);
        cy.get(ELEMENTS.campoTelefone).type(lead.telefone);
        cy.get(ELEMENTS.campoCPF).type(lead.cpf);
        cy.screenshot('formulario-preenchido');
      })
    });
  }

  enviarLead() {
    cy.get(ELEMENTS.bodyFormulario).within(() => {
      cy.get(ELEMENTS.botaoEnviar).click();
    })
  }

  validarEnvioLead() {
    cy.get(ELEMENTS.alertaMensagem).should('exist').and('be.visible').within(() => {
      cy.get(ELEMENTS.mensagemInicio).should('exist').and('be.visible').and('contain','Solicitação realizada com sucesso!');
      cy.get(ELEMENTS.mensagemFim).should('exist').and('be.visible').and('contain','Em alguns instantes um de nossos consultores entrará em contato com você.');
      cy.get(ELEMENTS.botaoFechar).should('exist').and('be.visible');
      cy.screenshot('Lead-enviado-sucesso');
    })
  }
}

export default new CarroNovoPage();
