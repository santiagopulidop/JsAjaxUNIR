function contarVocales() {
    let inputText = document.getElementById("frase-contador").value.toLowerCase();
    let contador = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let i = 0; i < inputText.length; i++) {
        let letraActual = inputText.charAt(i);
        if (contador.hasOwnProperty(letraActual)) {
            contador[letraActual]++;
        }
    }
    document.getElementById("a-count").innerHTML += "A: " + contador["a"];
    document.getElementById("e-count").innerHTML += "E: " + contador["e"];
    document.getElementById("i-count").innerHTML += "I: " + contador["i"];
    document.getElementById("o-count").innerHTML += "O: " + contador["o"];
    document.getElementById("u-count").innerHTML += "U: " + contador["u"];
    
    let button = document.getElementById("contar-vocales");
    button.textContent = "Intentar de nuevo";
    button.onclick = function() {
      document.getElementById("frase-contador").value = "";
      button.textContent = "Verificar";
      document.getElementById("a-count").innerHTML = "";
      document.getElementById("e-count").innerHTML = "";
      document.getElementById("i-count").innerHTML = "";
      document.getElementById("o-count").innerHTML = "";
      document.getElementById("u-count").innerHTML = "";
      button.onclick = contarVocales;
    };
}