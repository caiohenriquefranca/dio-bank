export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 10;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    };

    getName = (): string => {
        return this.name;
    };

    deposit = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            this.balance += amount;
            console.log(`Você depositou R$${amount.toFixed(2)}. Saldo atual: R$${this.balance.toFixed(2)}.`);
        } else {
            console.log('Valor de depósito inválido ou conta inativa.');
        }
    };

    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance >= amount && amount > 0) {
            this.balance -= amount;
            console.log(`Você sacou R$${amount.toFixed(2)}. Saldo atual: R$${this.balance.toFixed(2)}.`);
        } else {
            console.log('Saque não permitido. Verifique o saldo ou o status da conta.');
        }
    };

    getBalance = (): void => {
        console.log(`Saldo atual: R$${this.balance.toFixed(2)}.`);
    };
    

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta inválida');
    };
}
