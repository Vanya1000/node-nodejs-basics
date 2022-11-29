import {argv, stdout} from 'process';

const parseArgs = () => {
    const filterArgs = argv.slice(2).reduce((acc, arg, index, arr) => {
        if (arg.startsWith('--')) {
            const value = arr[index + 1];
            if (value) {
                acc.push(`${arg.slice(2)} is ${value}`);
            }
        }
        return acc;
    }, []);
    stdout.write(filterArgs.join(', '));
};

parseArgs();