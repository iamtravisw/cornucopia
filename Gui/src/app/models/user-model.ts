export class User {
    userId?: number;
    userName?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    userImageUrl?: string;
    lastLogin?: Date;
    premium?: string;
    password?: string;

    constructor() {
        this.userId = 0;
        this.userName = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.email = "";
        this.userImageUrl = "";
        this.lastLogin = new Date(2015, 5, 21);
        this.premium = "";
        this.password = "";
    }
}