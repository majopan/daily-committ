import * as fs from 'fs';
import * as path from 'path';
import { simpleGit } from 'simple-git';

const REPO_PATH = path.resolve();
const FILE_NAME = 'daily_commit.txt';
const BRANCH = 'main';

(async () => {
    const git = simpleGit(REPO_PATH);

    try {
        await git.checkout(BRANCH);

        const filePath = path.join(REPO_PATH, FILE_NAME);
        const date = new Date().toLocaleString();
        fs.appendFileSync(filePath, `Contribución diaria: ${date}\n`);

        await git.add(FILE_NAME);

        const commitMessage = `Contribución diaria - ${date}`;
        await git.commit(commitMessage);

        await git.push('origin', BRANCH);

        console.log('Contribución diaria realizada con éxito.');
    } catch (error) {
        console.error('Error al realizar la contribución diaria:', error);
    }
})();
