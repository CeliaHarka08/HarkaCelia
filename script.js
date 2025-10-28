function atualizarEscola() {
  const diretora = document.getElementById("inputDiretora").value;
  const alunos = document.getElementById("inputAlunos").value;
  const professores = document.getElementById("inputProfessores").value;
  const salas = document.getElementById("inputSalas").value;
  const banheiros = document.getElementById("inputBanheiros").value;

  if (diretora) document.getElementById("diretora").textContent = diretora;
  if (alunos) document.getElementById("alunos").textContent = alunos;
  if (professores) document.getElementById("professores").textContent = professores;
  if (salas) document.getElementById("salas").textContent = salas;
  if (banheiros) document.getElementById("banheiros").textContent = banheiros;

  alert("✅ Informações atualizadas com sucesso!");
}

