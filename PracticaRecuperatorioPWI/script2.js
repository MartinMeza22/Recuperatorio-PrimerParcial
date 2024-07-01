const cantidadObtenida = localStorage.getItem('camposNecesitados');
const opcionObtenida = localStorage.getItem('camposSeleccionado');

const body = document.querySelector('#main');
const darResultado = document.querySelector('#obtener-resultado');
let resultadoFinal = document.querySelector('#resultado');

for(let i=0; i<cantidadObtenida; i++){
    let nuevaEtiqueta = document.createElement('input');
    nuevaEtiqueta.type = 'number';
    nuevaEtiqueta.placeholder = 'Ingrese el número deseado';
    nuevaEtiqueta.classList.add('numero');
    body.appendChild(nuevaEtiqueta);
}

function realizarCalculos(e){
    const operacion = localStorage.getItem('operacion');
    const inputs = document.querySelectorAll('.numero');
    const numeros = [];

    // Recorrer todos los inputs y obtener sus valores
    inputs.forEach(nuevaEtiqueta => {
    numeros.push(parseFloat(nuevaEtiqueta.value));
});
console.log(numeros);

}
realizarCalculos();
darResultado.addEventListener('click', resultadoObtenido);


function resultadoObtenido(){
    let resultado = "holas";
    const operacion = localStorage.getItem('operacion');
    const inputs = document.querySelectorAll('.numero');
    const numeros = [];

    // Recorrer todos los inputs y obtener sus valores
    inputs.forEach(nuevaEtiqueta => {
    numeros.push(parseFloat(nuevaEtiqueta.value));
    });
    console.log(numeros);

    switch(opcionObtenida){
        
        case 'sumar':
            resultado = numeros.reduce((acc, curr) => acc + curr, 0);
            break;
        case 'restar':
            resultado = numeros.reduce((acc, curr) => acc - curr);
            break;
        case 'multiplicar':
            resultado = numeros.reduce((acc, curr) => acc * curr, 1);
            break;
    }
    resultadoFinal.textContent = "El resultado final es:".concat(resultado);
    console.log(resultado);
}   