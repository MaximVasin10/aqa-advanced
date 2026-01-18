import { Book } from './Book.js';

export class Ebook extends Book {
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