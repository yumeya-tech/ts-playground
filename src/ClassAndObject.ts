class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log('Hello, ' + this.name);
    }
}

const person = new Person('John');
person.greet();
