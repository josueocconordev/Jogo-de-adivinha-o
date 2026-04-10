let numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 0;
let limite = 5;

function verificarChute() {

  let input = document.getElementById("chute");
  let chute = Number(input.value);

  if (input.value === "" || isNaN(chute)) return;

  console.log({ chute, numeroSecreto });

  if (chute === numeroSecreto) {

    tentativas++;

    document.getElementById("mensagem").innerText =
      `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;

    finalizarJogo();

  } else {

    tentativas++;

    if (tentativas >= limite) {
      document.getElementById("mensagem").innerText =
        `💀 Game Over! O número era ${numeroSecreto}`;

      finalizarJogo();
      return;
    }

    if (chute > numeroSecreto) {
      document.getElementById("mensagem").innerText =
        "📉 Muito baixo!";
    } else {
      document.getElementById("mensagem").innerText =
        "📈 Muito alto!";
    }
  }

  document.getElementById("tentativas").innerText =
    `Tentativas: ${tentativas}`;

  input.value = "";
}

function finalizarJogo() {
  document.getElementById("btnChutar").disabled = true;
  document.getElementById("chute").disabled = true;
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 11);
  tentativas = 0;

  document.getElementById("mensagem").innerText =
    "Novo jogo! Boa sorte 😄";

  document.getElementById("tentativas").innerText =
    "Tentativas: 0";

  document.getElementById("chute").disabled = false;
  document.getElementById("btnChutar").disabled = false;

  document.getElementById("chute").value = "";
}