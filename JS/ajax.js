function mostrarURLActual(){
    let urlInput = document.getElementById("url-actual");
    urlInput.value = window.location.href;
}

window.addEventListener('load',mostrarURLActual)

function mostrarContenidosUrlActual(){
    let resultadoDiv = document.getElementById('headers-url-actual');
    let estadoActualUrl = document.getElementById('estado-peticion-actual');
    let codigoEstadoActual = document.getElementById('codigo-estado-url-actual');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.UNSENT) {
            estadoActualUrl.innerHTML = '<p><b>Estado:</b> No iniciada</p>';
        } else if (xhr.readyState === XMLHttpRequest.LOADING) {
            estadoActualUrl.innerHTML = '<p><b>Estado:</b> Cargando...</p>';
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
            estadoActualUrl.innerHTML = '<p><b>Estado:</b>Completada!</p>';

            let headers = xhr.getAllResponseHeaders();
            let codigoEstado = xhr.status;
  
            resultadoDiv.innerHTML = `<p><b>Respuesta del servidor: </b>${headers} </p>`;
            codigoEstadoActual.innerHTML = `<p><b>Código de Estado: </b>${codigoEstado} </p>`;
    }
  };

  xhr.send();
}


function mostrarContenidosUrlIngresada(){
    let urlInput = document.getElementById('input-url-ingresada');
    let url = urlInput.value;
    let resultadoDiv = document.getElementById('headers-url-ingresada');
    let estadoActualUrlIngresada = document.getElementById('estado-peticion-url-ingresada');
    let codigoEstadoUrlIngresada = document.getElementById('codigo-estado-url-ingresada');
    
    if (!url) {
        alert('Ingresa una URL válida');
        return;
      }
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.UNSENT) {
          estadoActualUrlIngresada.innerHTML = '<p><b>Estado:</b> No iniciada</p>';
        } else if (xhr.readyState === XMLHttpRequest.LOADING) {
          estadoActualUrlIngresada.innerHTML = '<p><b>Estado:</b> Cargando...</p>';
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
          estadoActualUrlIngresada.innerHTML = '<p><b>Estado:</b>Completada!</p>';

          let headers = xhr.getAllResponseHeaders();
          let codigoEstado = xhr.status;
  
          resultadoDiv.innerHTML =  `<p><b>Respuesta del servidor: </b>${headers} </p>`;
          codigoEstadoUrlIngresada.innerHTML =  `<p><b>Código de Estado: </b>${codigoEstado} </p>`;
    }
  };

  xhr.send();
}


  