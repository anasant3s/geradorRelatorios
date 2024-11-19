// script.js

document.getElementById("report-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter os dados do formulário
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const qntd= parseFloat(document.getElementById("qntd").value);

    // Criar o relatório
    const relatorio = `
    Relatório Gerado:

    Nome: ${nome}
    Data: ${data}
    Valor: R$ ${valor.toFixed(2)}
    Quantidade: ${qntd}
    `;

    // Armazenar os dados no localStorage (opcional)
    localStorage.setItem("relatorio", relatorio);

    // Exibir o relatório na tela
    document.getElementById("relatorio").textContent = relatorio;
    document.getElementById("relatorio-container").style.display = "block";

    // Limpar o formulário
    document.getElementById("report-form").reset();
});
