let lista = "";
let parrafo = "";

fetch("https://pokeapi.co/api/v2/type/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      lista += `<option value="${datos.results[i].url}">${datos.results[i].name}</option>`;
    }
    document.getElementById("drop").innerHTML = `
    <select onchange="nombres()" id="lista">${lista}</select>
    `;
  });

function nombres() {
  parrafo = "";
  fetch(document.getElementById("lista").value)
    .then(function respuesta(respuesta) {
      return respuesta.json();
    })
    .then(function datos(datos) {
      for (let i = 0; i < 3; i++) {
        parrafo += `
      <p>${
        datos.pokemon[Math.floor(Math.random() * datos.pokemon.length) + 0]
          .pokemon.name
      }</p>
      `;
      }
      document.getElementById("patata").innerHTML = parrafo;
    });
}
