let numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 0;

function verificarChute() {
  let input = document.getElementById("chute");
  let chute = Number(input.value);
  let limite = 10;
  let numeroSecreto = Math.floor(Math.random() * 101);

if (tentativas >= limite) {
  document.getElementById("mensagem").innerText =
    "Game Over! O número era " + numeroSecreto;

  document.getElementById("btnChutar").disabled = true;
  document.getElementById("chute").disabled = true;
}

  // validação
  if (input.value === "") {
    return;
  }

  if (isNaN(chute)) {
    return;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    document.getElementById("mensagem").innerText =
      "Parabéns! Você acertou em " + tentativas + " tentativas! 🎉";

    document.getElementById("btnChutar").disabled = true;
    document.getElementById("chute").disabled = true;

  } else if (chute > numeroSecreto) {
    document.getElementById("mensagem").innerText =
      "Muito alto! Tente um número menor 👇";

  } else {
    document.getElementById("mensagem").innerText =
      "Muito baixo! Tente um número maior 👆";
  }

  document.getElementById("tentativas").innerText =
    "Tentativas: " + tentativas;

  input.value = "";
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 11);
  tentativas = 0;

  document.getElementById("mensagem").innerText =
    "Novo jogo! Boa sorte 😄";

  document.getElementById("tentativas").innerText =
    "Tentativas: 0";

  document.getElementById("chute").disabled = false;
  document.getElementById("chute").value = "";

  document.getElementById("btnChutar").disabled = false;
}