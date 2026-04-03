document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MANIPULAÇÃO DE DOM: Modo Claro/Escuro 
    const themeToggleBtn = document.getElementById("themeToggle");
    const bodyEl = document.body;

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = bodyEl.getAttribute("data-theme");
        if (currentTheme === "light") {
            bodyEl.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️";
        } else {
            bodyEl.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "🌙";
        }
    });

    // 2. MANIPULAÇÃO DE DOM: Validação de Formulário 
    const form = document.getElementById("leadForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita recarregamento da página
        let isValid = true;

        // Elementos do formulário
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const whatsapp = document.getElementById("whatsapp");
        const curso = document.getElementById("curso");
        const turno = document.getElementById("turno");

        // Regras Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Resetar classes do Bootstrap
        [nome, email, whatsapp, curso, turno].forEach(el => el.classList.remove("is-invalid"));

        // Validação 1: Nome (não pode estar vazio e deve ter mais de 3 chars) 
        if (nome.value.trim().length < 3) {
            nome.classList.add("is-invalid");
            isValid = false;
        }

        // Validação 2: E-mail (formato válido) 
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add("is-invalid");
            isValid = false;
        }

        // Validação 3: WhatsApp (deve ter no mínimo 10 dígitos) 
        const wppClean = whatsapp.value.replace(/\D/g, ''); // Remove não-números
        if (wppClean.length < 10) {
            whatsapp.classList.add("is-invalid");
            isValid = false;
        }

        // Validação 4: Curso (deve ter selecionado uma opção) 
        if (curso.value === "") {
            curso.classList.add("is-invalid");
            isValid = false;
        }

        // Validação 5: Turno (deve ter selecionado uma opção) 
        if (turno.value === "") {
            turno.classList.add("is-invalid");
            isValid = false;
        }

        // Se passar em todas as 5 validações, exibe sucesso e limpa 
        if (isValid) {
            successMsg.classList.remove("d-none");
            form.reset();
            
            // Oculta mensagem após 5 segundos
            setTimeout(() => {
                successMsg.classList.add("d-none");
            }, 5000);
        }
    });
});