    import { execSync } from 'child_process';
    import * as fs from 'fs';

    try {
    const date = new Date().toISOString();
    fs.writeFileSync('daily_commit.txt', `Commit realizado el ${date}`);

    // Ejecuta comandos Git
    execSync('git add .');
    execSync('git commit -m "Daily commit from script"');
    execSync('git push');
    console.log('¡Contribución diaria realizada con éxito!');
    } catch (error) {
    console.error('Error al realizar la contribución diaria:', error);
    }
