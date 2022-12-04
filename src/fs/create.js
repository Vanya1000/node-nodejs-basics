import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    try {
        const path = join(__dirname, 'files', 'fresh.txt');
        await writeFile(path, 'I am fresh and young', {flag: 'wx', encoding: 'utf8'});
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();