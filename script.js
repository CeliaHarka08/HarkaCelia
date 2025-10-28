let alunos = [];
let professores = [];

function adicionarAluno() {
    const nome = document.getElementById("nomeAluno").value;
    const idade = document.getElementById("idadeAluno").value;
    const curso = document.getElementById("cursoAluno").value;

    if (nome && idade && curso) {
        alunos.push({ nome, idade, curso });
        atualizarLista("alunos");
        limparCampos(["nomeAluno", "idadeAluno", "cursoAluno"]);
    } else {
        alert("Por favor, preencha todos os campos do aluno!");
    }
}

function adicionarProfessor() {
    const nome = document.getElementById("nomeProfessor").value;
    const idade = document.getElementById("idadeProfessor").value;
    const disciplina = document.getElementById("disciplinaProfessor").value;

    if (nome && idade && disciplina) {
        professores.push({ nome, idade, disciplina });
        atualizarLista("professores");
        limparCampos(["nomeProfessor", "idadeProfessor", "disciplinaProfessor"]);
    } else {
        alert("Por favor, preencha todos os campos do professor!");
    }
}

function atualizarLista(tipo) {
    const lista = document.getElementById(`lista${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    lista.innerHTML = "";

    const dados = tipo === "alunos" ? alunos : professores;

    dados.forEach((pessoa, index) => {
        const li = document.createElement("li");
        li.textContent = tipo === "alunos"
            ? `${pessoa.nome} — ${pessoa.idade} anos — Curso: ${pessoa.curso}`
            : `${pessoa.nome} — ${pessoa.idade} anos — Disciplina: ${pessoa.disciplina}`;
        
        const btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = () => removerItem(tipo, index);
        btn.style.marginLeft = "10px";
        btn.style.backgroundColor = "#dc3545";
        btn.style.border = "none";
        btn.style.padding = "5px 10px";
        btn.style.borderRadius = "4px";
        btn.style.color = "white";
        btn.style.cursor = "pointer";

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function removerItem(tipo, index) {
    if (tipo === "alunos") {
        alunos.splice(index, 1);
        atualizarLista("alunos");
    } else {
        professores.splice(index, 1);
        atualizarLista("professores");
    }
}

function limparCampos(ids) {
    ids.forEach(id => document.getElementById(id).value = "");
}
