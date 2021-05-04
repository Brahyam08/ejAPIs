let parrafo = "";
let imprimir = "";

fetch("http://swapi.dev/api/planets/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      parrafo += `
      <option value="${datos.results[i].name}">${datos.results[i].name}</option>
      `;
    }
    document.getElementById("listaPlanetas").innerHTML = parrafo;
  });

function buscaHabitantes() {
  imprimir = "";

  let seleccion = document.getElementById("listaPlanetas").value;
  let arrayPersonajes = [];
  fetch("http://swapi.dev/api/planets/")
    .then(function respuesta(res) {
      return res.json();
    })
    .then(function datos(data) {
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].name === seleccion) {
          arrayPersonajes = data.results[i].residents;
          console.log(arrayPersonajes);
        }
      }
    })
    .then(function imprimir(imprimir) {
      for (let i = 0; i < arrayPersonajes.length; i++) {
        fetch(arrayPersonajes[i])
          .then(function resp(resp) {
            return resp.json();
          })
          .then(function datitos(datitos) {
            console.log(datitos);
            imprimir += `
            <p>${datitos.name}</p>
            `;
            document.getElementById("patata").innerHTML = imprimir;
          });
      }
    });
}
