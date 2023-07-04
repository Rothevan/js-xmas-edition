const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

}

function validarCiudad(ciudad){
    if (ciudad.length === 0) {
        return 'Debe seleccionar una ciudad'
    }

}

function validarDescripcionRegalo (regalo) {
    if (regalo.length <= 50) {
        return 'Este campo debe tener más de 50 caracteres'
    }
    if (regalo.length >=200) {
        return 'Este campo debe tener menos de 200 caracteres'
    }
}

