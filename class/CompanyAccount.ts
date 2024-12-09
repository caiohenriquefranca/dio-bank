import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            this.balance += amount;
            console.log(`Você pegou um empréstimo de R$${amount.toFixed(2)}. Saldo atual: R$${this.balance.toFixed(2)}.`);
        } else {
            console.log('Empréstimo não permitido. Verifique o status da conta ou o valor informado.');
        }
    };
}
