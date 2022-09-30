const contenedor = document.querySelector(".contenedor");


  function buscarPersonaje(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}/`)
    .then((respuesta) => respuesta.json())
    .then((datosPersonaje) => {
      pintarPersonajes(datosPersonaje);
    });
}

function cogerPersonajes(numeroId) {
  for (let i = 1; i <= numeroId; i++) {
    buscarPersonaje(i);
  }
}
// function buscarNombre(nombre) {
//   fetch(`https://rickandmortyapi.com/api/character/${id}/`)
//     .then((respuesta) => respuesta.json())
//     .then((datosPersonaje) => {
//       // console.log(datosPersonaje)
//       pintarPersonajes(datosPersonaje);
//     });
// }
//pintar los personajes
function pintarPersonajes(personaje) {
  //Imagen y texto del personaje
  const cajaPersonaje = document.createElement("div");
  cajaPersonaje.classList.add("caja-personaje");
  contenedor.appendChild(cajaPersonaje);

  //imagen del personaje
  const cajaImagen = document.createElement("div");
  cajaImagen.classList.add("caja-imagen");
  cajaPersonaje.appendChild(cajaImagen);

  const imagen = document.createElement("img");
  imagen.classList.add("imagen-personaje");
  imagen.src = personaje.image;
  cajaImagen.appendChild(imagen);

  const cajaDatos = document.createElement("div");
  cajaDatos.classList.add("caja-datos");
  cajaPersonaje.appendChild(cajaDatos);

  //datos del nombre
  const nombre = document.createElement("h2");
  //text.content?
  nombre.textContent = personaje.name;
  cajaDatos.appendChild(nombre);

  //datos de estado y raza
  const estadoRaza = document.createElement("div");
  estadoRaza.classList.add("estado-raza");
  const estado = document.createElement("p");

  //dibujar circulo
  const ciruculo = document.createElement("p");
  ciruculo.classList.add("circulo");
  if (personaje.status == "Alive") {
    ciruculo.style.backgroundColor = "green";
  } else if (personaje.status == "unknown") {
    ciruculo.style.backgroundColor = "white";
  } else {
    ciruculo.style.backgroundColor = "red";
  }

// estado y raza del personaje
  estadoRaza.appendChild(ciruculo);
  estado.innerHTML = personaje.status;
  estadoRaza.appendChild(estado);
  const raza = document.createElement("p");
  raza.innerHTML = `&nbsp;- ${personaje.species}`;
  estadoRaza.appendChild(raza);
  cajaDatos.appendChild(estadoRaza);

  //localizacion
  const txtLocalizacion = document.createElement("p");
  txtLocalizacion.innerHTML = "Last know location: ";
  cajaDatos.appendChild(txtLocalizacion);
  const localizacion = document.createElement("p");
  localizacion.innerHTML = personaje.location.name;
  localizacion.classList.add("p-localizacion");
  cajaDatos.appendChild(localizacion);

  //primera vez visto episodio
  const txtVisto = document.createElement("p");
  txtVisto.innerHTML = "First seen in: ";
  cajaDatos.appendChild(txtVisto);
  const visto = document.createElement("p");
  visto.innerHTML=personaje.episode[0].name;
  cajaDatos.appendChild(visto);
let buscar=personaje.episode[0]

  fetch(personaje.episode[0])
 .then((episodios) => episodios.json())
 .then(datosEpisodio =>console.log(datosEpisodio.name))
  
}
cogerPersonajes(1);

  
