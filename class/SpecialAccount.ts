import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            const bonus = 10;
            this.balance += amount + bonus;
            console.log(`Você depositou R$${amount.toFixed(2)} com bônus de R$${bonus}. Saldo atual: R$${this.balance.toFixed(2)}.`);
        } else {
            console.log('Valor de depósito inválido ou conta inativa.');
        }
    };
}
