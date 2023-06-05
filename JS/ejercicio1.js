function checkPalindrome() {
    let input = document.getElementById("inputText").value.toLowerCase();
    let reversedInput = input.split("").reverse().join("");
    let resultLabel = document.getElementById("resultLabel");
    
    if (input === reversedInput) {
      resultLabel.textContent = "¡Es un palíndromo!";
    } else {
      resultLabel.textContent = "No es un palíndromo.";
    }
    
    let button = document.getElementById("verificar-palindroma");
    button.textContent = "Intentar de nuevo";
    button.onclick = function() {
      document.getElementById("inputText").value = "";
      resultLabel.textContent = "";
      button.textContent = "Verificar";
      button.onclick = checkPalindrome;
    };
  }
  