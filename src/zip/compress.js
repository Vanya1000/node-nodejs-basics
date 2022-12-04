import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'process';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const source = join(__dirname, 'files', 'fileToCompress.txt');
    const destination = join(__dirname, 'files', 'archive.gz');
    const readFileStream = createReadStream(source);
    const gzip = createGzip();
    const writeFileStream = createWriteStream(destination);
    try {
        await pipeline(readFileStream, gzip, writeFileStream);
        stdout.write('Compression completed successfully');
    } catch (err) {
        throw err;
    }
};

await compress();