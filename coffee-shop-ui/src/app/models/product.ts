export class Product {
    title: string;
    description: string;
    pricePerKg: string;
    amount: number;
    totalPrice: string;
    imageUrl: string;

    constructor(title: string, description: string, pricePerKg: string, totalPrice: string, amount: number, imageUrl: string) {
        this.title = title;
        this.description = description;
        this.pricePerKg = pricePerKg;
        this.totalPrice = totalPrice;
        this.amount = amount;
        this.imageUrl = imageUrl;
    }
}
