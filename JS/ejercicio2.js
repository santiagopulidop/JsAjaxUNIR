function compareNumbers() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
  
    if (number1 > number2) {
        document.getElementById("result").innerHTML = `${number1} es mayor que ${number2}`;
    } else if (number2 > number1) {
        document.getElementById("result").innerHTML = `${number2} es mayor que ${number1}`;
    } else {
        document.getElementById("result").innerHTML = "Ambos números son iguales";
    }
    
    
    let button = document.getElementById("comparar");
    button.textContent = "Intentar de nuevo";
    button.onclick = function() {
      document.getElementById("number1").value = "";
      document.getElementById("number2").value = "";
      document.getElementById("result").innerHTML = ""
      button.textContent = "Verificar";
      button.onclick = compareNumbers;
    };
}