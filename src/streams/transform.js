import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'node:process';
import { EOL } from 'node:os';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const chunkToString = chunk.toString();
            const removeEOL = chunkToString.replace(EOL, '');
            const revers = removeEOL.split('').reverse().join('');
            callback(null, revers + EOL);
        }
    });
    pipeline(
        stdin,
        transformStream,
        stdout,
        (err) => {
            if (err) {
                throw err;
            }
        }
    )
};

await transform();