const contenedor = document.querySelector(".contenedor");
let urlEpisodio;
const url = "https://rickandmortyapi.com/api/character/?page=";

const productos = [
  {nombre: 'rick', valor: 100},
  {nombre: 'pepe',valor:100},
  {nombre: 'antonio',valor:100},
  {nombre: 'luis',valor:100}
]
console.log(productos)
async function cogerPersonajes(num = 1) {
  let response = await fetch(`${url}${num}`);
  let personajes = await response.json();
  return personajes;
}

pintarPersonajes();

let buscador = document.getElementById("buscador");

async function buscarPersonaje() {

    let nombrePersonajes = await cogerPersonajes(1);
    if (buscador.value==""){
      pintarPersonajes(1);
    }
    nombrePersonajes.results.forEach(personaje => {
      if(personaje.name.toLowerCase()==buscador.value.toLowerCase()){
        contenedor.innerHTML=`<div class="caja-personaje"><img src="${personaje.image}"</img><div class="caja-texto">
        <h2 class="nombre">
        ${personaje.name}</h2>  <span class="estado-raza">
        ${personaje.species} - ${personaje.status}</span>
        <p class="info">Last known location: </p> <p>${personaje.location.name}</p>
        <p class="info"> First seen in: </p> <p>${personaje.episode[0]}</p></div></div>`
      }
    });        
    }
function pintarPersonajes(num) {
  cogerPersonajes(num).then((personajes) => {
    contenedor.innerHTML = personajes.results.map((personaje) => {
      nombresPersonajes=personajes.name;
      return `<div class="caja-personaje"><img src="${personaje.image}"</img><div class="caja-texto">
      <h2 class="nombre">
      ${personaje.name}</h2>  <span class="estado-raza">
      ${personaje.species} - ${personaje.status}</span>
      <p class="info">Last known location: </p> <p>${personaje.location.name}</p>
      <p class="info"> First seen in: </p> <p>${personaje.episode[0]}</p></div></div>`;
      })
      .join("");
  });
}


document.getElementById("boton1").onclick = function () {
  console.log(num);
  pintarPersonajes(num);
};
document.getElementById("boton2").onclick = function () {
  pintarPersonajes(2);
};
document.getElementById("boton3").onclick = function () {
  pintarPersonajes(3);
};
document.getElementById("boton4").onclick = function () {
  pintarPersonajes("?page=4");
};
document.getElementById("boton5").onclick = function () {
  pintarPersonajes("?page=5");
};
