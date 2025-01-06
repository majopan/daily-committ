import * as fs from 'fs';
import * as path from 'path';
import { simpleGit } from 'simple-git';

// Configuración
const REPO_PATH = path.resolve(); // Ruta actual
const FILE_NAME = 'daily_commit.txt';
const BRANCH = 'main'; // Cambia si usas otra rama

(async () => {
    const git = simpleGit(REPO_PATH);

    try {
        // Navegar a la rama correcta
        await git.checkout(BRANCH);

        // Actualizar o crear el archivo con la fecha actual
        const filePath = path.join(REPO_PATH, FILE_NAME);
        const date = new Date().toLocaleString();
        fs.appendFileSync(filePath, `Contribución diaria: ${date}\n`);

        // Añadir los cambios al índice
        await git.add(FILE_NAME);

        // Hacer el commit
        const commitMessage = `Contribución diaria - ${date}`;
        await git.commit(commitMessage);

        // Empujar los cambios al repositorio remoto
        await git.push('origin', BRANCH);

        console.log('Contribución diaria realizada con éxito.');
    } catch (error) {
        console.error('Error al realizar la contribución diaria:', error);
    }
})();
