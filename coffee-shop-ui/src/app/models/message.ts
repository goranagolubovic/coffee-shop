export class Message {
    NameFrom: string;
    EmailFrom: string;
    Message1: string;

    constructor(name: string, email: string, message: string) {
        this.NameFrom = name;
        this.EmailFrom = email;
        this.Message1 = message;
    }
}
