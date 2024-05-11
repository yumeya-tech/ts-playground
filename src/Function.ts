function greet(name: string): string {
    return 'Hello, ' + name;
}

console.log(greet('TypeScript'));

const greetArrow = (name: string) => `Hello, ${name}`;

console.log(greetArrow('TypeScript'));
