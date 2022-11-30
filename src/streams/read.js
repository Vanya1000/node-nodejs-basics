import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const sourcePath = join(__dirname, 'files', 'fileToRead.txt');
        const readableStream = createReadStream(sourcePath);
        let data = '';
        readableStream.on ('data', (chunk) => {
            data += chunk;
        });
        readableStream.on ('end', () => {
            stdout.write(data);
        });
    } catch (err) {
        throw err;
    }
};

await read();