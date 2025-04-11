document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');

const overlay = document.getElementById("overlay");
overlay.classList.toggle('hidden');


// Adicione um evento de clique no botão
openBtn.addEventListener('click', () => {
  // Quando o botão for clicado, adicionar a classe 'blur' ao fundo
  background.classList.toggle('blur');
});
       
});

document.getElementById('logout_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');

const overlay = document.getElementById("overlay");
overlay.classList.toggle('hidden');
       
});

// Função para ocultar a tela de carregamento após 3 segundos
window.onload = function() {
    setTimeout(function() {
        // Ocultar a tela de carregamento
        document.querySelector('.loading-screen').classList.add('hidden');
        // Exibir a página principal do aplicativo
        document.querySelector('.app-screen').style.display = 'block';
    }, 3000); // 3000ms = 3 segundos
};

// Seleciona o formulário e o checkbox de consentimento
const form = document.querySelector('form');
const privacyConsent = document.getElementById('privacyConsent');

// Adiciona um evento para verificar ao enviar o formulário
form.addEventListener('submit', function(event) {
    // Verifica se o checkbox de consentimento está marcado
    if (!privacyConsent.checked) {
        // Impede o envio do formulário
        event.preventDefault();
        
        // Exibe um alerta para o usuário
        alert('Você precisa aceitar os termos de privacidade para continuar.');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio para teste

    const formData = new FormData(form);
    
    // Logando os dados para verificar se o endereço está sendo capturado
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
    
    // Se estiver tudo certo, podemos prosseguir com o envio
    // form.submit(); 
});




