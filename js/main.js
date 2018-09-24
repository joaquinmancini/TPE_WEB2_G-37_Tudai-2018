/*document.addEventListener("DOMContentLoaded", function () {
  "use stric";
  let url = "http://web-unicen.herokuapp.com/api/groups/gaudio/conjuntoPrecio";
  let inicio = document.querySelector(".inicio");
  let peliculas = document.querySelector(".peliculas");
  let contacto = document.querySelector(".contacto");
  let container = document.querySelector(".estructuracambiante");
  
  
  

  function load(urlInterna) {
   
    fetch(urlInterna).then(function (response) {
      if (response.ok) {
        response.text().then(t => container.innerHTML = t);
      } else {
        container.innerHTML = "Esta mal la URL!";
      }
    })
      .catch(function (e) {
        console.log(e)
        container.innerHTML = "No nos pudimos descargar!";
      })
  }
  

  function createElementObservacion(txt) {
    let containerObservaciones = container.querySelector("div.observaciones");
    let observacion = document.createTextNode(txt);
    let espacio = document.createElement("br");
    containerObservaciones.appendChild(observacion);
    containerObservaciones.appendChild(espacio);
  }


  function createFetch(producto, descripcion, precio,quantity) {
    let conjuntoPrecio = {
      "producto": producto,
      "descripcion": descripcion,
      "precio": precio
    }
    let objeto = {
      "thing": conjuntoPrecio
    }
    for (let i = 0; i < quantity; i++) {
      fetch(url, {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(objeto)
      })
        .catch(function (e) {
          console.log(e)
        }) 
    } 
  }
  inicio.addEventListener('click', c => load("/html/inicio.html"));
  peliculas.addEventListener('click', c => load("/html/peliculas.html"));
  contacto.addEventListener('click', c => load("/html/infocontacto.html"));
})
*/