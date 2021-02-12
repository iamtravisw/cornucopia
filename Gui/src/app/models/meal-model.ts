export class Meal {

    id: number;
    title: string;
    content: string;
    details: string;
    imageUrl: string;
    imageCaption: string;

    constructor() {
        this.id = 0;
        this.title = "Could not retrieve title.";
        this.content = "Could not retrieve content.";
        this.details = "Could not retrieve details.";
        this.imageUrl = "";
        this.imageCaption = "Could not retrieve caption."
    }
}