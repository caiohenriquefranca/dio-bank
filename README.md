# DioAccount Project

Este projeto é uma implementação de um sistema de contas bancárias utilizando **TypeScript**, seguindo os princípios de orientação a objetos. O sistema possui diferentes tipos de contas com funcionalidades específicas.

---

## 📂 Estrutura do Projeto

- **`DioAccount`**: Classe abstrata base para todos os tipos de conta.
- **`CompanyAccount`**: Conta empresarial com funcionalidade de empréstimo.
- **`SpecialAccount`**: Conta especial que oferece bônus em depósitos.
- **`app.ts`**: Arquivo principal onde as contas são instanciadas e os métodos são demonstrados.

---

## 🚀 Funcionalidades

### DioAccount (Classe Base)
- **Depósito**: Adiciona saldo à conta, desde que o valor seja positivo e a conta esteja ativa.
- **Saque**: Permite sacar saldo da conta, desde que o valor solicitado seja menor ou igual ao saldo atual e a conta esteja ativa.
- **Validação de Conta**: Garante que apenas contas ativas possam realizar operações.
- **Consulta de Saldo**: Exibe o saldo atual da conta.

### CompanyAccount
- Herda todas as funcionalidades de `DioAccount`.
- **Empréstimo**: Permite adicionar um valor ao saldo como empréstimo, desde que a conta esteja ativa.

### SpecialAccount
- Herda todas as funcionalidades de `DioAccount`.
- **Depósito com Bônus**: Ao realizar um depósito, um bônus fixo de R$10 é adicionado ao valor informado.

---

## 💻 Tecnologias Utilizadas

- **TypeScript**: Para tipagem estática e orientação a objetos.
- **Node.js**: Para executar o projeto.

---

## 📋 Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina. Instale as dependências do projeto com o comando:

```bash
npm install
