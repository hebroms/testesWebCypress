# 🚀 Automação Cypress - Fluxo de Envio de Lead

Este projeto automatiza o envio de leads randomicos para veículos novos, utilizando **Cypress**.

## 💡 Pré-requisitos
- Node.js (v16+)
- npm

## 🚀 Como rodar o projeto

1️⃣ **Clone o repositório:**
```bash
git clone https://github.com/hebroms/testesWebCypress.git
cd testesWebCypress
```

2️⃣ **Instale as dependências:**

```bash
npm install
```
3️⃣ **Execute os testes:**

```bash
npx cypress run
```
ou

```bash
npx cypress run --config-file=config/cypress.config.test.js 
```

4️⃣ **Visualize o relatório:**

- O arquivo de relatório será gerado na pasta 'cypress/reports/html/', lá haverá um arquivo index.html.
- Abrir o arquivo e terá o relatório

## 🛠️  **Configurações Adicionais**

**Ambientes**
Foi feito configuração caso precise alternar ambientes.
```bash
npx cypress run --config-file=config/cypress.config.test.js     # Ambiente de Teste
npx cypress run --config-file=config/cypress.config.hml.js      # Ambiente de Homologação
npx cypress run --config-file=config/cypress.config.prod.js     # Ambiente de Produção
```

**Pipeline**
Foi feito configuração para pipelines.