import assert from 'assert';
import { suma } from '../src/app.js'; // Ajusta la ruta si es necesario

// Un test mínimo para verificar la función suma
assert.strictEqual(suma(1, 2), 3, 'Test de suma falló: 1 + 2 != 3');

console.log('Test de suma OK');