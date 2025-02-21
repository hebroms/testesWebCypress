// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';
import Lead from './Lead';

faker.locale = 'pt_BR';

Cypress.Commands.add('gerarCPF', () => {
  const randomDigits = () => Math.floor(Math.random() * 9);
  const calcDV = (digits) => {
    const soma = digits.reduce((acc, val, idx) => acc + val * (digits.length + 1 - idx), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const cpf = Array.from({ length: 9 }, randomDigits);
  cpf.push(calcDV(cpf));
  cpf.push(calcDV(cpf));
  return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
});


Cypress.Commands.add('gerarTelefone', () => {
  return faker.phone.number('##9########');
});

Cypress.Commands.add('gerarLead', () => {
  const lead = new Lead();
  return cy.wrap(lead);
});