import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    try {
        const destinationPath = join(__dirname, 'files', 'fileToWrite.txt');
        const readStream = createWriteStream(destinationPath);
        stdin.on('data', (chunk) => {
            readStream.write(chunk, 'utf8');
        });
    } catch (err) {
        throw err;
    }
};

await write();