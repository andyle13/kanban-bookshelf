export class Book {
    readonly title: string
    readonly description: string
    readonly author: string

    constructor(
        title:string, description:string, author:string) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}