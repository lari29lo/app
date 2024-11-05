
document.getElementById("breakCookieButton").addEventListener("click", async () => {
    // Muda a imagem do biscoito para quebrado
    document.getElementById("cookieImage").src = "../images/open_cookie.png";
  
    // Busca a frase de sorte da API
    const response = await fetch('/fortune');
    const data = await response.json();
  
    // Exibe a frase de sorte
    document.getElementById("fortuneText").innerText = data.fortune;
  });
  