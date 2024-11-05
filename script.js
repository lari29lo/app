let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

// Função para incrementar o contador
function increment() {
  count++;
  updateDisplay();
}

// Função para decrementar o contador
function decrement() {
  if (count > 0) { // Evita contagem negativa
    count--;
    updateDisplay();
  }
}

// Função para atualizar o display do contador
function updateDisplay() {
  countDisplay.textContent = count;
}

// Adiciona eventos aos botões
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
