import { Ingredient } from "./ingredient-model";
import { User } from "./user-model";

export class Recipe {

    recipeId?: number;
    imageUrl: string;
    name: string;
    cuisine: string;
    prepTime: number;
    prepTimeUnits: string;
    cookTime: number;
    cookTimeUnits: string;
    temp: string;
    tempUnits: string;
    yield: string;
    ingredients: Ingredient[];
    instructions: string;
    equipment: string;
    notes: string;
    tags: any[];
    user: User;

    constructor() {
        this.recipeId = 0;
        this.name = "";
        this.imageUrl = "";
        this.cuisine = "";
        this.prepTime = 0;
        this.prepTimeUnits = "";
        this.cookTime = 0;
        this.cookTimeUnits = "";
        this.temp = "";
        this.tempUnits = "";
        this.yield = "";
        this.ingredients = [];
        this.instructions = "";
        this.equipment = "";
        this.notes = "";
        this.tags = [];
        this.user = {};
    }
}