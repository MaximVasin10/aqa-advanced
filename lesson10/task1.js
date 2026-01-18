import { Book } from './Book.js';
import { Ebook } from './Ebook.js';

//task1

const book1 = new Book("Gerold", "Gerold_1", 2010);
const book2 = new Book("Vasya", "HappyDay", 1999);
const book3 = new Book("Olya", "Killer", 1888);


//book1.printInfo();
//book2.printInfo();
//book3.printInfo();

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