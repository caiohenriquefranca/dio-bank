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

## 📜 Exemplo de Saída


```bash
---- Conta Pessoal ----
Você depositou R$50.00. Saldo atual: R$60.00.
Você sacou R$30.00. Saldo atual: R$30.00.
Saldo atual: R$30.00.

---- Conta Empresarial ----
Você depositou R$200.00. Saldo atual: R$210.00.
Você pegou um empréstimo de R$500.00. Saldo atual: R$710.00.
Saldo atual: R$710.00.

---- Conta Especial ----
Você depositou R$100.00 com bônus de R$10. Saldo atual: R$120.00.
Você sacou R$50.00. Saldo atual: R$70.00.
Saldo atual: R$70.00.

