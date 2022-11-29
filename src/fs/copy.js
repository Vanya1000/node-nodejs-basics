import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const source = join(__dirname, 'files');
    const destination = join(__dirname, 'files_copy');
    try {
        await mkdir(destination);
        const files = await readdir(source);

        for (const file of files) {
            const sourceFile = join(source, file);
            const destinationFile = join(destination, file);
            await copyFile(sourceFile, destinationFile);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

copy();