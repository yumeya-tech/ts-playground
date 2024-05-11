import {readFile, writeFile} from 'fs/promises';

async function writeFileExample() {
    await writeFile('example.txt', 'Hello TypeScript');
    console.log('File written');
}

async function readFileExample() {
    const content = await readFile('example.txt', 'utf8');
    console.log(content);
}

writeFileExample().then(() => readFileExample());
