// Função para atualizar os dados da escola dinamicamente
function atualizarDados() {
    const salas = document.getElementById("inputSalas").value;
    const banheiros = document.getElementById("inputBanheiros").value;
    const professores = document.getElementById("inputProfessores").value;
    const alunos = document.getElementById("inputAlunos").value;

    if (salas) document.getElementById("salas").textContent = salas;
    if (banheiros) document.getElementById("banheiros").textContent = banheiros;
    if (professores) document.getElementById("professores").textContent = professores;
    if (alunos) document.getElementById("alunos").textContent = alunos;

    alert("✅ Informações atualizadas com sucesso!");
}
