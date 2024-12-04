class Book {
    private nameBook: string;
    private nameAuthor: string;
    private numberBook: number;

    constructor(nameBook: string, nameAuthor: string, numberBook: number) {
        this.nameBook = nameBook;
        this.nameAuthor = nameAuthor;
        this.numberBook = numberBook;
    }

    display(): void {
        console.log(`Name Book: ${this.nameBook}`);
        console.log(`Name Author: ${this.nameAuthor}`);
        console.log(`Number Book: ${this.numberBook}`);
    }

    getNumberBook(): number {
        return this.numberBook;
    }

    getNameBook(): string {
        return this.nameBook;
    }

    getNameAuthor(): string {
        return this.nameAuthor;
    }
}

abstract class Person {
    private name: string;
    private age: number;
    private add: string;
    private vb: Book[];

    constructor(name: string,  age: number,  add: string,  vb: Book[]){
        this.name = name;
        this.age = age;
        this.add = add;
        this.vb = vb;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getAdd(): string {
        return this.add;
    }

    getVb(): Book[] {
        return this.vb;
    }

    // abstract moneyPay(): number;

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.add}`);
        console.log("List Book Borrowed:");
        this.vb.forEach(book => book.display());
        // console.log(`Money Pay: ${this.moneyPay()}`);
    }
}

class Children extends Person {
    display(): void {
        console.log("Children!");
        super.display();
    }
}

class Adult extends Person {
    display(): void {
        console.log("Adult!");
        super.display();
    }
}


function main() {
    const books: Book[] = [
        new Book("A", "A", 1),
        new Book("B", "B", 2),
        new Book("C", "C", 3),
        new Book("D", "D", 4),
        new Book("E", "E", 5),
    ];

    books.forEach(book => book.display());
}

main();