function buscar() {
  let anno = document.getElementById("anno").value;
  let mes = document.getElementById("mes").value;
  let dia = document.getElementById("dia").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=I95RTKFpLs04xZEkXqMZx8kJF3rbChGPab3AFl9Q&date=${anno}-${mes}-${dia}`
  )
    .then(function respuesta(respuesta) {
      return respuesta.json();
    })
    .then(function datos(datos) {
      document.getElementById("patata").innerHTML = `
      <img src="${datos.url}" alt="${datos.title}"/>
      <p>Fecha: ${datos.date}</p>
      <p>Título: ${datos.title}</p>
      <p>Descripción: ${datos.explanation}</p>
      `;
    });
}
