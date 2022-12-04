import { rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        const source = join(__dirname, 'files', 'fileToRemove.txt');
        await rm(source);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();