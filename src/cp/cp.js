import { fork } from 'child_process';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcess = fork(join(__dirname, 'files', 'script.js'), args.split(' '));
};

spawnChildProcess('--some --args');