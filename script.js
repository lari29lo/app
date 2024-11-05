let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10); // Atualiza a cada 10 milissegundos
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  millisecondsDisplay.textContent = "000";
}

function updateTime() {
  elapsedTime = Date.now() - startTime;

  const minutes = Math.floor((elapsedTime / 60000) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = Math.floor(elapsedTime % 1000);

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
  millisecondsDisplay.textContent = String(milliseconds).padStart(3, "0");
}

// Adiciona eventos aos botões
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("pauseButton").addEventListener("click", pauseTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
