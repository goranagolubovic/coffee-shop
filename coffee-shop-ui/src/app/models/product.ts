export class Product {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;

    constructor(id: number, title: string, description: string, price: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
