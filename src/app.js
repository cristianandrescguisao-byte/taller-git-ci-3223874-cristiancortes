/**
 * Suma dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function suma(a, b) {
    return a + b;
}

/**
 * Agrega un nuevo <li> a la lista con id="lista"
 * @param {string} texto - El texto del nuevo ítem de la lista
 */
export function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        console.log(`Se agregó: ${texto}`);
    }
}

console.log("App lista");