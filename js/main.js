// VARIABLES
const btnMostrar = document.querySelector ('#mostrarUsuario')
const pintaUsuario = document.querySelector ('#pintaUsuario')


// FUNCIONES
//para recibir los datos del usuario creamos la función de la llamada a la API desde el botón
function llamarApi() {
  return new Promise((resolve, reject) => {
    let conexion = true
    setTimeout(() => {
    if (conexion) {
      let alumno = {nombre: 'pepe', correo:'pepe@correo.es'}
      resolve(alumno);
    } else {
      reject ('Error: conexion perdida, intenta mas tarde')
    }
    }, 2000);
  });
}

btnMostrar.addEventListener('click', ()=>{
llamarApi().then(resolve=>{
// aqui muestra los datos usuario
let mensaje = `El nombre del usuario es:${resolve.nombre} y su correo: ${resolve.correo}`
    pintaUsuario.textContent = mensaje
    })
          .catch(reject =>{
    //aqui mostrar error al usuario
    pintaUsuario.textContent = reject
    })
})

