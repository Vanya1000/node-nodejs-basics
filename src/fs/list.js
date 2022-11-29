import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const { stdout } = process;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        const source = join(__dirname, 'files');
        const files = await readdir(source);
        stdout.write(files.join('\n'));
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();