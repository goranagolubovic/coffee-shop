import { CreditCard } from "./models/credit-card";

export const convertPriceToNumber: any = (price: string) => {
    return Number(price.split("€")[0]);
}

export const convertPriceToString: any = (price: number) => {
    return price.toString().concat("€")
}

export const formatCreditCardData: any = (data: any) => {
    const validUntil = data.month + "/" + data.year;
    return new CreditCard(data.nameOfUser, data.creditCardNumber, data.cvc2,
        validUntil, 0.0)
}