function mostrarVocales() {
    let palabra = document.getElementById("input-palabra").value.toLowerCase();
    let vocales = obtenerVocales(palabra);
    let resultado = vocales.length > 0 ? "Vocales encontradas: " + vocales.join(" ") : "La palabra no contiene vocales.";
    document.getElementById("vocales-encontradas").textContent = resultado;
    
    let button = document.getElementById("encontrar-vocales");
    button.textContent = "Intentar de nuevo";
    button.onclick = function() {
      document.getElementById("input-palabra").value = "";
      resultLabel.textContent = "";
      button.textContent = "Verificar";
      document.getElementById("vocales-encontradas").innerHTML = ""
      button.onclick = mostrarVocales;
    };
}
  
function obtenerVocales(palabra) {
    let vocales = [];
    let letras = "aeiouáéíóú";
    for (let i = 0; i < palabra.length; i++) {
      if (letras.includes(palabra[i])) {
        if (!vocales.includes(palabra[i])) {
          vocales.push(palabra[i]);
        }
      }
    }
    return vocales;
  }