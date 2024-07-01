const campoIngreso = document.querySelector('#campo-ingreso');
const campoSeleccionado = document.querySelector('#operacion');

const boton = document.querySelector('#boton');


function irALaOtraPagina(){
    localStorage.setItem('camposNecesitados', campoIngreso.value);
    localStorage.setItem('camposSeleccionado', campoSeleccionado.value);
}

boton.addEventListener('click', irALaOtraPagina);











