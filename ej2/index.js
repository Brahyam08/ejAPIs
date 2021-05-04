fetch("https://randomuser.me/api/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(datos) {
    document.getElementById("div").innerHTML = `
    <img src="${datos.results[0].picture.thumbnail}" alt="${datos.results[0].name.first}"/>
    <p>${datos.results[0].name.first}</p>
    <p>${datos.results[0].email}</p>
    <p>${datos.results[0].location.street.name}, ${datos.results[0].location.street.number}</p>
    <p>${datos.results[0].location.city},${datos.results[0].location.state}</p>
    <p>${datos.results[0].location.postcode}</p>
    
    `;
  });
