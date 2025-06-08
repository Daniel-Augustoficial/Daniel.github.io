# Instruções de Uso e Personalização do Portfólio

## Como Editar o Conteúdo

### Ferramentas Necessárias

Para editar o portfólio, você precisará de:

1. Um editor de texto simples como Notepad, Visual Studio Code, Sublime Text, etc.
2. Um navegador web para visualizar as alterações.

### Editando Informações Pessoais

1. Abra o arquivo `index.html` em um editor de texto.
2. Localize as seguintes seções para personalizar:

#### Seção de Boas-vindas
```html
<section id="inicio" class="section">
    <div class="container">
        <h1>Bem-vindo!</h1>
        <p>Estudante apaixonado por tecnologia, pronto para encarar desafios reais e contribuir com inovação. Vamos construir o futuro juntos?</p>
        <!-- ... -->
    </div>
</section>
```

#### Seção Sobre
```html
<section id="sobre" class="section">
    <div class="container">
        <div class="profile-container">
            <!-- ... -->
            <div class="profile-content">
                <h2>Olá!</h2>
                <p>Meu nome é <span class="highlight">Seu Nome</span>, sou estudante de carreira interessado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia.</p>
                <!-- ... -->
            </div>
        </div>
    </div>
</section>
```

#### Seção Projetos
```html
<section id="projetos" class="section">
    <div class="container">
        <h2>Meus Projetos</h2>
        
        <div class="projects-grid">
            <!-- Projeto 1 -->
            <div class="project-card">
                <h3>Projeto 1</h3>
                <p>Descrição do meu primeiro projeto</p>
                <a href="https://github.com/seu-usuario/projeto1" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> Ver no GitHub
                </a>
            </div>
            
            <!-- Adicione mais projetos aqui -->
        </div>
    </div>
</section>
```

#### Rodapé
```html
<footer>
    <p>&copy; 2025 Seu Nome - Todos os direitos reservados</p>
</footer>
```

### Alterando Links de Redes Sociais

Localize a seção de links sociais e substitua os URLs pelos seus:

```html
<div class="social-links">
    <a href="https://github.com/seu-usuario" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/seu-usuario" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://instagram.com/seu-usuario" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="mailto:seu-email@exemplo.com"><i class="fas fa-envelope"></i></a>
</div>
```

### Alterando a Foto de Perfil

1. Prepare uma foto de perfil quadrada.
2. Renomeie-a para `avatar-placeholder.png` e substitua o arquivo existente na pasta `images/`.
3. Ou, se preferir usar outro nome:
   - Coloque sua foto na pasta `images/`.
   - Edite o arquivo `index.html` e atualize o caminho da imagem:
     ```html
     <img src="images/sua-foto.png" alt="Minha foto" id="profile-img">
     ```

### Adicionando Novos Projetos

Para adicionar um novo projeto, copie e cole o bloco de código abaixo dentro da `<div class="projects-grid">` e personalize conforme necessário:

```html
<div class="project-card">
    <h3>Nome do Projeto</h3>
    <p>Descrição do projeto</p>
    <a href="https://github.com/seu-usuario/projeto" target="_blank" class="github-link">
        <i class="fab fa-github"></i> Ver no GitHub
    </a>
</div>
```

## Personalizando o Visual

### Alterando Cores

Para alterar as cores do tema, edite o arquivo `css/style.css` e localize a seção de variáveis no início:

```css
:root {
    --primary-color: #00ff00;       /* Cor principal (verde) */
    --primary-glow: 0 0 10px #00ff00; /* Efeito de brilho */
    --secondary-color: #00cc00;     /* Cor secundária */
    --dark-bg: #000000;             /* Cor de fundo (preto) */
    --dark-bg-transparent: rgba(0, 0, 0, 0.9); /* Fundo semi-transparente */
    --border-color: #00ff00;        /* Cor das bordas */
    --text-color: #00ff00;          /* Cor do texto */
    --highlight-color: #ffffff;     /* Cor de destaque (branco) */
    --font-mono: 'Share Tech Mono', monospace; /* Fonte principal */
    --font-display: 'VT323', monospace; /* Fonte para títulos */
}
```

### Alterando Fontes

Para usar fontes diferentes:

1. Edite o link para o Google Fonts no arquivo `index.html`:
   ```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SuaFonte&family=OutraFonte&display=swap">
   ```

2. Atualize as variáveis de fonte no arquivo `css/style.css`:
   ```css
   :root {
       --font-mono: 'SuaFonte', monospace;
       --font-display: 'OutraFonte', monospace;
   }
   ```

## Visualizando as Alterações

Após fazer as alterações:

1. Salve os arquivos editados.
2. Abra o arquivo `index.html` em um navegador web para ver as mudanças.
3. Se estiver usando um servidor local ou hospedagem, pode ser necessário atualizar os arquivos no servidor.

## Publicando seu Portfólio

### Opção 1: GitHub Pages (Gratuito)

1. Crie uma conta no [GitHub](https://github.com/).
2. Crie um novo repositório chamado `seu-usuario.github.io`.
3. Faça upload de todos os arquivos do portfólio para este repositório.
4. Seu site estará disponível em `https://seu-usuario.github.io`.

### Opção 2: Netlify (Gratuito)

1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Arraste e solte a pasta do seu portfólio na área de upload do Netlify.
3. Seu site será publicado com um URL aleatório, que você pode personalizar nas configurações.

### Opção 3: Hospedagem Tradicional

Se você já possui um serviço de hospedagem:

1. Faça upload de todos os arquivos do portfólio para o diretório raiz do seu servidor web.
2. Acesse seu site pelo domínio configurado.

## Suporte e Ajuda

Se precisar de ajuda para personalizar seu portfólio ou tiver dúvidas sobre como editar o código, considere:

1. Consultar tutoriais básicos de HTML, CSS e JavaScript online.
2. Participar de comunidades de desenvolvimento web como Stack Overflow ou fóruns específicos.
3. Contratar um desenvolvedor web para fazer alterações mais complexas.

