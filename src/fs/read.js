import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const { stdout } = process;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const source = join(__dirname, 'files', 'fileToRead.txt');
    try {
        const text = await readFile(source, 'utf-8');
        stdout.write(text);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();