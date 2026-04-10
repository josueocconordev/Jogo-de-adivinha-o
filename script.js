let numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 0;
let limite = 5;

// 🎯 mensagem centralizada
function atualizarMensagem(texto, tipo) {
  const msg = document.getElementById("mensagem");
  msg.innerText = texto;
  msg.className = "mensagem " + tipo;
}

// 💥 shake
function aplicarShake() {
  const container = document.querySelector(".container");

  container.classList.add("shake");

  setTimeout(() => {
    container.classList.remove("shake");
  }, 300);
}

// 🎉 vitória
function efeitoVitoria() {
  document.querySelector(".container").classList.add("vitoria");
}

// 🔒 desativar jogo
function finalizarJogo() {
  document.getElementById("btnChutar").disabled = true;
  document.getElementById("chute").disabled = true;
}

// 🎮 lógica principal
function verificarChute() {

  let input = document.getElementById("chute");
  let chute = Number(input.value);

  if (input.value === "" || isNaN(chute)) return;

  console.log({ chute, numeroSecreto });

  tentativas++;

  // 💀 game over
  if (tentativas >= limite && chute !== numeroSecreto) {
    atualizarMensagem(`💀 Game Over! O número era ${numeroSecreto}`, "erro");
    aplicarShake();
    finalizarJogo();
    return;
  }

  // 🎯 acerto
  if (chute === numeroSecreto) {
    atualizarMensagem(
      `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`,
      "sucesso"
    );

    efeitoVitoria();
    finalizarJogo();

  // 📉 maior
  } else if (chute > numeroSecreto) {
    atualizarMensagem("📉 Muito alto!", "dica");
    aplicarShake();

  // 📈 menor
  } else {
    atualizarMensagem("📈 Muito baixo!", "dica");
    aplicarShake();
  }

  document.getElementById("tentativas").innerText =
    `Tentativas: ${tentativas}`;

  input.value = "";
}

// 🔄 reiniciar jogo
function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 11);
  tentativas = 0;

  document.getElementById("mensagem").innerText =
    "Novo jogo! Boa sorte 😄";

  document.getElementById("mensagem").className = "mensagem";

  document.getElementById("tentativas").innerText = "Tentativas: 0";

  document.getElementById("chute").disabled = false;
  document.getElementById("btnChutar").disabled = false;

  document.querySelector(".container").classList.remove("vitoria");

  document.getElementById("chute").value = "";
}