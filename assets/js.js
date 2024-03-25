function verificarResultadoIgual(jogo, resultado) {
  if (jogo.length !== resultado.length) {
    return false;
  }
  const jogoOrdenado = jogo.slice().sort((a, b) => a - b);
  const resultadoOrdenado = resultado.slice().sort((a, b) => a - b);
  const coincidencias = [];
  for (let i = 0; i < jogoOrdenado.length; i++) {
    if (jogoOrdenado[i] === resultadoOrdenado[i]) {
      coincidencias.push(jogoOrdenado[i]);
    }
  }
  return coincidencias;
}

function verificarDezenas() {
  const resultadoInput = document.getElementById("resultado");
  const jogoInput = document.getElementById("jogo");
  const resultadoStr = resultadoInput.value;
  const jogoStr = jogoInput.value;
  const resultado = resultadoStr.split(",").map(Number);
  const jogo = jogoStr.split(",").map(Number);
  const dezenasCoincidentes = verificarResultadoIgual(jogo, resultado);
  const output = document.getElementById("output");
  if (dezenasCoincidentes.length > 0) {
    output.textContent =
      "Dezenas coincidentes: " + dezenasCoincidentes.join(", ");
  } else {
    output.textContent =
      "Nenhuma dezena coincide entre o jogo e o resultado.";
  }
  const ganhou = verificarVitoria(jogo, resultado);
  if (ganhou) {
    resultadoJogo("h2", "VOCÊ GANHOU! UHUUU");
  } else {
    resultadoJogo("h2", "NÃO FOI DESTA VEZ ! NÃO DESISTA!");
  }
}

function resultadoJogo(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  resultadoJogo("h1", "CONFIRA SEUS JOGOS DE FORMA RÁPIDA E EFICIENTE.<br><strong>BOA SORTE!!</strong>");
}

function verificarVitoria(jogo, resultado) {
  const jogoOrdenado = jogo.slice().sort((a, b) => a - b);
  const resultadoOrdenado = resultado.slice().sort((a, b) => a - b);
  return JSON.stringify(jogoOrdenado) === JSON.stringify(resultadoOrdenado);
}

exibirMensagemInicial();