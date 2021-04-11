export class User {
    userId?: number;
    userName?: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    userImageUrl?: string;
    lastLogin?: Date;
    premium?: string;
    password?: string;
    tagLine?: string;
    biography?: string;

    constructor() {
        this.userId = 0;
        this.userName = "";
        this.displayName = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.email = "";
        this.userImageUrl = "";
        this.lastLogin = new Date("05-21-2015"),
        this.premium = "";
        this.password = "";
        this.tagLine = "";
        this.biography = "";
    }
}