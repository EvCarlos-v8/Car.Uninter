// Aguarda o DOM (página) carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura o formulário pelo ID
    const formulario = document.getElementById("formContato");

    // Adiciona um evento de escuta para quando o usuário clicar no botão enviar (submit)
    formulario.addEventListener("submit", function(event) {
        // Impede o comportamento padrão de recarregar a página antes da validação
        event.preventDefault();

        // Captura os valores digitados nos campos e remove espaços extras
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Expressão regular (Regex) para validar o formato do e-mail
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // 1. Validação: Verifica se algum campo está vazio
        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Por favor, preencha todos os campos do formulário antes de enviar.");
            return; // Interrompe a execução da função
        }

        // 2. Validação: Verifica se o formato do e-mail é válido
        if (!emailPattern.test(email)) {
            alert("Erro: Por favor, insira um formato de e-mail válido (exemplo: usuario@dominio.com).");
            return; // Interrompe a execução da função
        }

        // 3. Sucesso: Se passar por todas as validações, simula o envio com sucesso
        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
        
        // Limpa todos os campos do formulário após o sucesso
        formulario.reset();
    });
});