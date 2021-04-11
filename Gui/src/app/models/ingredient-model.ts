import { User } from "./user-model";

export class Ingredient {

    ingredientId?: number;
    ingredientName: string;
    atHome: Boolean;
    imageUrl: string;
    quantity: number;
    unit: string;
    warningLow: number;
    note: string;
    user: User;

    constructor() {
        this.ingredientId = 0;
        this.ingredientName = "";
        this.atHome = false;
        this.imageUrl = "";
        this.quantity = 0;
        this.unit = "";
        this.warningLow = 0;
        this.note = "";
        this.user = {};
    }
}