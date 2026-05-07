// VARIABLES
const btnMostrar = document.querySelector ('#mostrarUsuario')
const pintaUsuario = document.querySelector ('#pintaUsuario')


// FUNCIONES
//para recibir los datos del usuario creamos la función de la llamada a la API desde el botón
async function llamarApi() {
    let conexion = true;
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (conexion) {
        let alumno = {nombre: 'Ainhoa', correo: 'ainhoa@correo.es'}
        return alumno;
    } else {
        throw new Error('Conexión perdida, inténtalo algo mas tarde');
    }
}
// Añadimos un async por que vamos a usar el await
btnMostrar.addEventListener('click', async () => {
    try {
        let resolve = await llamarApi();
        let mensaje = `El nombre del usuario es: ${resolve.nombre} y su correo: ${resolve.correo}`;
        pintaUsuario.textContent = mensaje;
    } catch (reject) {
        pintaUsuario.textContent = reject;
    }
})

