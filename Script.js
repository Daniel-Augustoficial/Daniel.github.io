// Função para simular o carregamento inicial
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("progress");
    
    // Simula o progresso de carregamento
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            
            // Adiciona um pequeno atraso antes de esconder a tela de carregamento
            setTimeout(function() {
                loadingScreen.style.opacity = "0";
                setTimeout(function() {
                    loadingScreen.style.display = "none";
                    
                    // Remove Matrix do loading
                    const matrixCanvasLoading = document.getElementById("matrix-canvas-loading");
                    if (matrixCanvasLoading) matrixCanvasLoading.remove();
                    // Inicia as animações de digitação após o carregamento
                    initTypingEffects();
                }, 300); // Tempo de espera para display: none
            }, 300); // Tempo de espera para opacidade
        } else {
            width += 5; // Incremento fixo para uma barra de progresso mais suave
            if (width > 100) width = 100;
            progressBar.style.width = width + "%";
        }
    }, 120); // Intervalo mais lento para preenchimento da barra
    
    // Configura a navegação ativa
    setupNavigation();
    
    // Adiciona efeito de matriz ao fundo
    createMatrixEffect();
});

// Função para configurar a navegação
function setupNavigation() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    // Adiciona evento de clique para rolagem suave
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
            
            // Atualiza link ativo
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    // Atualiza link ativo durante a rolagem
    window.addEventListener("scroll", function() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// Função para iniciar efeitos de digitação
function initTypingEffects() {
    const element = document.getElementById("typewriter");
    const phrases = [
        "Bem-vindo ao meu portfólio!",
        "Conectando inovação e aprendizado...",
       "Explorando o universo da tecnologia...",
       "Construindo o futuro, um projeto por vez..."
    ];
    const typingSpeed = 80;
    const erasingSpeed = 40;
    const pauseTime = 1500;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Adiciona estrutura com cursor
    element.innerHTML = '<span id="typed-text"></span><span class="cursor">_</span>';
    const typedText = document.getElementById("typed-text");

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }
        } else {
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }

    type();
}

// Função para criar efeito de matriz no fundo
function createMatrixEffect(targetElement = document.body, canvasId = "matrix-canvas") {
    // Evita múltiplos canvas
    if (document.getElementById(canvasId)) return;
    // Cria o canvas e adiciona ao elemento alvo
    const canvas = document.createElement("canvas");
    canvas.id = canvasId;
    canvas.style.position = targetElement === document.body ? "fixed" : "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
    canvas.style.display = "block";
    targetElement.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    function getSize() {
        if (targetElement === document.body) {
            return [window.innerWidth, window.innerHeight];
        } else {
            return [targetElement.offsetWidth, targetElement.offsetHeight];
        }
    }
    let [width, height] = getSize();
    canvas.width = width;
    canvas.height = height;

    // Caracteres para o efeito
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = fontSize + "px monospace";
        ctx.fillStyle = "#00ff00";
        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let animationId = setInterval(draw, 40);

    // Ajusta o canvas ao redimensionar a janela ou elemento
    function resizeCanvas() {
        [width, height] = getSize();
        canvas.width = width;
        canvas.height = height;
    }
    if (targetElement === document.body) {
        window.addEventListener("resize", resizeCanvas);
    }
}

// Adiciona efeito de hover nos cards de projeto
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.borderColor = "#ffffff";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.borderColor = "#00ff00";
        });
    });
});

// Adapta carregamento para Matrix no loading-screen

document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("progress");
    // Adiciona Matrix no loading
    if (loadingScreen) createMatrixEffect(loadingScreen, "matrix-canvas-loading");
    // Simula o progresso de carregamento
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            
            // Adiciona um pequeno atraso antes de esconder a tela de carregamento
            setTimeout(function() {
                loadingScreen.style.opacity = "0";
                setTimeout(function() {
                    loadingScreen.style.display = "none";
                    
                    // Remove Matrix do loading
                    const matrixCanvasLoading = document.getElementById("matrix-canvas-loading");
                    if (matrixCanvasLoading) matrixCanvasLoading.remove();
                    // Inicia as animações de digitação após o carregamento
                    initTypingEffects();
                }, 300); // Tempo de espera para display: none
            }, 300); // Tempo de espera para opacidade
        } else {
            width += 5; // Incremento fixo para uma barra de progresso mais suave
            if (width > 100) width = 100;
            progressBar.style.width = width + "%";
        }
    }, 120); // Intervalo mais lento para preenchimento da barra
    
    // Configura a navegação ativa
    setupNavigation();
    
    // Adiciona efeito de matriz ao fundo
    createMatrixEffect();
});

