const contenedorDePeliculas = document.querySelector('#peliculas');
//let peliculasAgregadas = document.createElement('p');
let filtro = document.querySelector('#filtro-peliculas');

//DEFINO EL ARRAY DE PELICULAS
const peliculas = [
{name: "El señor de los anillos"},
{name: "Monsters Inc"},
{name: "El exorcista"},
{name: "Messi"},
{name: "Francotirador"},
{name: "Babadook"},
{name: "1914"},
{name: "Tsunami"},
{name: "El Hobit"},
{name: "No respires"},
{name: "El Hobit 2"},
{name: "No respires 2"},
]

//Creo la función de busqueda
const busquedaDePeliculas = () => {
    contenedorDePeliculas.innerHTML = "";
    //Guardo la pelicula que busca el usuario (EN MINUSCULAS) 
    const peliculaBuscada = filtro.value.toLowerCase();
    //Hago el filtro                filtro el array de peliculas    //Hago todos los caracteres minusculas y le agrego que "empiece con" 
    const peliculasFiltradas = peliculas.filter((pelicula) => pelicula.name.toLowerCase().startsWith(peliculaBuscada)); //Lo que escriba el usuario 
    
    peliculasFiltradas.forEach((pelicula)=>{
        const li = document.createElement("li");
        li.textContent = pelicula.name;
        contenedorDePeliculas.appendChild(li);
    })
};

filtro.addEventListener("input", busquedaDePeliculas);











/*
function hola(){
    for(let i=1; i <= 8; i++){
        let peliculasAgregadas = document.createElement('p');   
        let anio = document.createElement('p');
        anio.textContent = "Año " + (2010 + i);
        peliculasAgregadas.textContent = "Pelicula " + i;
        peliculasAgregadas.appendChild(anio);     
        contenedorDePeliculas.appendChild(peliculasAgregadas);

    }
}
*/













/*
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la referencia al input de filtro
    let filtro = document.querySelector('filtro-peliculas');
    // Obtener la referencia a la lista de películas
    // contenedorDePeliculas = document.querySelector('#peliculas');
    // Obtener todos los elementos de la lista (li)
    const movies = contenedorDePeliculas.getElementsByTagName('p');

    // Añadir un event listener para el evento 'input' en el campo de filtro
    filtro.addEventListener('input', () => {
        // Obtener el valor del input y convertirlo a minúsculas
        const filterValue = filtro.value.toLowerCase();

        // Convertir la colección de 'li' a un array y recorrer cada elemento
        Array.from(movies).forEach(movie => {
            // Obtener el nombre de la película y convertirlo a minúsculas
            const movieName = movie.textContent.toLowerCase();
            
            // Verificar si el nombre de la película incluye el valor del filtro
            if (movieName.includes(filterValue)) {
                // Si lo incluye, mostrar el elemento (remover clase 'hidden' si existe)
                movie.classList.remove('hidden');
            } else {
                // Si no lo incluye, ocultar el elemento (añadir clase 'hidden')
                movie.classList.add('hidden');
            }
        });
    });
});

*/

//hola();