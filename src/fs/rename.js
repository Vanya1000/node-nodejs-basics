import fs from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const source = join(__dirname, 'files', 'wrongFilename.txt');
    const destination = join(__dirname, 'files', 'properFilename.md');
    try {
        await fs.rename(source, destination);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();