import { Book } from './task1.js';

class Ebook extends Book {
    _format;
    constructor(format, author, name, create_date) {
        super(author, name, create_date);
        this.format = format;
    }

    get format() {
        return this._format ? this._format.toUpperCase() : "UNKNOWN";
    }

    set format(value) {
        const allowedFormats = ['pdf', 'epub', 'mobi', 'txt'];
        if (!allowedFormats.includes(value.toLowerCase())) {
            console.error(`Validation Error: Format "${value}" is not supported.`);
            return;
        }
        this._format = value;
    }

    static bookToEbook(bookInstance, fileFormat) {
        return new Ebook(
            fileFormat,
            bookInstance.author,
            bookInstance.name,
            bookInstance.create_date
        );
    }

    printInfo() {
        const info = [
            `Author: ${this.author}`,
            `Title: ${this.name}`,
            `Date: ${this.create_date}`,
            `Format: ${this.format}`
        ];
        console.log(info.join('\n') + '\n');
    }
}

//task2

const ebook1 = new Ebook("pdf", "Gerold", "Gerold_1", 1888);
const ebook2 = new Ebook("epub", "Vasya", "HappyDay", 1988);
const ebook3 = new Ebook("xcltttt", "Olya", "Killer", 988);

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();


//task4

const allBooks = [ebook1, ebook2, ebook3];
console.log("--- OLDEST Book ---")
console.log(Book.getOldestBook(allBooks));


//task5
const simpleBook = new Book("Skryabin", "I,'Victory' and Berlin", 2008);

const convertedEbook = Ebook.bookToEbook(simpleBook, "pdf");

console.log("--- Converted EBook ---");
convertedEbook.printInfo();