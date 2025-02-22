import { faker } from '@faker-js/faker';

faker.locale = 'pt_BR';

export default class Lead {
  constructor() {
    this.nome = faker.person.fullName();
    this.email = faker.internet.email();
    this.telefone = faker.phone.number('##9########');
    this.cpf = this.#gerarCPF();
  }

  #gerarCPF(formatado = true) {
    const randomDigits = () => Math.floor(Math.random() * 9);
    const calcDV = (digits) => {
      const soma = digits.reduce((acc, val, idx) => acc + val * (digits.length + 1 - idx), 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const cpf = Array.from({ length: 9 }, randomDigits);
    cpf.push(calcDV(cpf));
    cpf.push(calcDV(cpf));

    return formatado
      ? cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      : cpf.join('');
  }

  getDados() {
    return {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      cpf: this.cpf,
    };
  }

  toJSON() {
    return JSON.stringify(this.getDados());
  }
}
