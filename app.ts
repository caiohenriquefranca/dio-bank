import { DioAccount } from "./class/DioAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { SpecialAccount } from "./class/SpecialAccount";

// Instância de uma conta normal
const personalAccount = new (class extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
})("João", 12345);

console.log("---- Conta Pessoal ----");
personalAccount.deposit(50);
personalAccount.withdraw(30);
personalAccount.getBalance();

// Instância de uma conta empresarial
const companyAccount = new CompanyAccount("Empresa ABC", 67890);

console.log("\n---- Conta Empresarial ----");
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.getBalance();

// Instância de uma conta especial
const specialAccount = new SpecialAccount("Maria", 11223);

console.log("\n---- Conta Especial ----");
specialAccount.deposit(100);
specialAccount.withdraw(50);
specialAccount.getBalance();
