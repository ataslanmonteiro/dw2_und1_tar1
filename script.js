function calcular() {
  // Recebe os valores dos campos de entrada e da operação
  const ent1 = parseFloat(document.getElementById("ent1").value);
  const ent2 = parseFloat(document.getElementById("ent2").value);
  const operacao = document.getElementById("operacao").value;

  // Realiza o cálculo escolhido
  let resultado;
  switch (operacao) {
    case "Somar":
      resultado = ent1 + ent2;
      break;
    case "Subtrair":
      resultado = ent1 - ent2;
      break;
    case "Multiplicar":
      resultado = ent1 * ent2;
      break;
    case "Dividir":
      resultado = ent1 / ent2;
      break;
  }
  // Exibe o resultado
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
