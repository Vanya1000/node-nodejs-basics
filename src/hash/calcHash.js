import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const { createHash } = await import('node:crypto');
const hash = createHash('sha256');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const file = createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
        file.pipe(hash).setEncoding('hex').pipe(stdout);
    } catch (err) {
        throw err;
    }
};

await calculateHash();