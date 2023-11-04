const form = document.getElementById("formulario");
const reloadPage = document.getElementById("reload");
const contatos = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  novaLinha();
  atualizaContatos();
});

reloadPage.addEventListener("click", () => {
  reset();
});

function reset() {
  let resetar = confirm("Gostaria de resetar os seus contatos?");
  if (resetar == true) {
    window.location.reload();
  }
}

function novaLinha() {
  const inputNome = document.getElementById("nome");
  const inputSobrenome = document.getElementById("sobrenome");
  const inputTel = document.getElementById("tel");
  let quantidade = 0;

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputSobrenome.value}</td>`;
  linha += `<td>${inputTel.value}</td>`;
  linha += "</tr>";
  quantidade += 1;
  contatos.push(quantidade);
  linhas += linha;

  const tabela = document.querySelector("tbody");
  tabela.innerHTML = linhas;

  inputNome.value = "";
  inputSobrenome.value = "";
  inputTel.value = "";
}

function totalContatos() {
  let somaContatos = 0;

  for (let i = 0; i < contatos.length; i++) {
    somaContatos += contatos[i];
  }

  return somaContatos;
}

function atualizaContatos() {
  const exibirContatos = totalContatos();

  document.getElementById("total").innerHTML =
    "Total de contatos: " + exibirContatos;
}
