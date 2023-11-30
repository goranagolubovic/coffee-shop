export class CreditCard {
    NameAndSurname: string;
    CreditCardNumber: string;
    Cvc2: string;
    ValidUntil: string;
    AccountState: number;
    constructor(
        NameAndSurname: string,
        CreditCardNumber: string,
        Cvc2: string,
        ValidUntil: string,
        AccountState: number,
    ) {
        this.NameAndSurname = NameAndSurname;
        this.CreditCardNumber = CreditCardNumber;
        this.Cvc2 = Cvc2;
        this.ValidUntil = ValidUntil;
        this.AccountState = AccountState;
    }
}
