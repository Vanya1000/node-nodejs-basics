import { createReadStream, createWriteStream } from 'node:fs';
import { stdout } from 'process';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const source = join(__dirname, 'files', 'archive.gz');
    const destination = join(__dirname, 'files', 'fileToCompress.txt');
    const readFileStream = createReadStream(source);
    const gzip = createUnzip();
    const writeFileStream = createWriteStream(destination);
    try {
        await pipeline(readFileStream, gzip, writeFileStream);
        stdout.write('Decompression completed successfully');
    } catch (err) {
        throw err;
    }
};

await decompress();