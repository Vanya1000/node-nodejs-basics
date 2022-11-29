import { env, stdout } from 'process';

const parseEnv = () => {
    const rssEnv = Object.entries(env).reduce((acc, [key, value]) => {
        if (key.startsWith('RSS_')) {
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []);
    stdout.write(rssEnv.join('; '));
};

parseEnv();