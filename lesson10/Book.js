export class Book {
    constructor(author, name, create_date) {
        this.author = author;
        this.name = name;
        this.create_date = create_date;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string' || value.length < 2) {
            console.error("Validation Error: Author name is too short.");
            return;
        }
        this._author = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (!value) {
            console.error("Validation Error: Book title cannot be empty.");
            return;
        }
        this._name = value;
    }

    get create_date() {
        return this._create_date;
    }
    set create_date(value) {
        if (typeof value !== 'number') {
            console.error("Year must be a number!");
            return;
        }
        this._create_date = value;
    }

    static getOldestBook(booksArray) {
        if (booksArray.length === 0) {
            return null;
        }

        return [...booksArray].sort((a, b) => a.create_date - b.create_date)[0];
    }

    printInfo() {
        console.log(`Author is: ${this.author} \n Book title is: ${this.name} \n Release date: ${this.create_date}\n`);
    }
}