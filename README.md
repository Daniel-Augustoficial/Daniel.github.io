# Portfólio Estilo Hacker/Matrix

Este é um portfólio web com tema "hacker/Matrix", desenvolvido com HTML, CSS e JavaScript. O design foi inspirado no estilo de terminal/código com texto verde em fundo escuro, similar ao filme Matrix.

## Estrutura do Projeto

```
portfolio/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── matrix-bg.png
│   └── avatar-placeholder.png
└── index.html
```

## Como Personalizar

### Informações Pessoais

Para personalizar o portfólio com suas informações, edite o arquivo `index.html`:

1. **Nome e Descrição**: Substitua "Seu Nome" pelo seu nome real e atualize a descrição pessoal na seção "Sobre".

```html
<p>Meu nome é <span class="highlight">Seu Nome</span>, sou estudante...</p>
```

2. **Links de Redes Sociais**: Atualize os links para suas redes sociais na seção "Início".

```html
<div class="social-links">
    <a href="https://github.com/seu-usuario" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/seu-usuario" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://instagram.com/seu-usuario" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="mailto:seu-email@exemplo.com"><i class="fas fa-envelope"></i></a>
</div>
```

3. **Tecnologias**: Modifique a lista de tecnologias que você domina.

```html
<div class="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <!-- Adicione ou remova tecnologias conforme necessário -->
</div>
```

### Projetos

Para adicionar seus projetos, edite a seção "Projetos" no arquivo `index.html`:

```html
<!-- Projeto 1 -->
<div class="project-card">
    <h3>Projeto 1</h3>
    <p>Descrição do meu primeiro projeto</p>
    <a href="https://github.com/seu-usuario/projeto1" target="_blank" class="github-link">
        <i class="fab fa-github"></i> Ver no GitHub
    </a>
</div>
```

Para adicionar mais projetos, duplique o bloco acima e atualize as informações.

### Foto de Perfil

Substitua o arquivo `avatar-placeholder.png` na pasta `images` pela sua foto de perfil. Mantenha o mesmo nome de arquivo ou atualize a referência no HTML:

```html
<img src="images/sua-foto.png" alt="Minha foto" id="profile-img">
```

### Cores e Estilo

Para modificar as cores e o estilo visual, edite o arquivo `css/style.css`. As principais variáveis de cores estão definidas no início do arquivo:

```css
:root {
    --primary-color: #00ff00;
    --primary-glow: 0 0 10px #00ff00;
    --secondary-color: #00cc00;
    --dark-bg: #000000;
    --dark-bg-transparent: rgba(0, 0, 0, 0.9);
    --border-color: #00ff00;
    --text-color: #00ff00;
    --highlight-color: #ffffff;
    --font-mono: 'Share Tech Mono', monospace;
    --font-display: 'VT323', monospace;
}
```

## Hospedagem

Para publicar seu portfólio online, você pode usar serviços gratuitos como:

1. **GitHub Pages**: Crie um repositório no GitHub e ative o GitHub Pages nas configurações.
2. **Netlify**: Faça upload dos arquivos ou conecte ao seu repositório GitHub.
3. **Vercel**: Similar ao Netlify, oferece hospedagem gratuita para sites estáticos.

## Dicas para Melhorias Futuras

1. Adicione mais projetos conforme você os desenvolve.
2. Inclua capturas de tela dos seus projetos.
3. Adicione uma seção de blog ou artigos técnicos.
4. Implemente um formulário de contato funcional usando serviços como Formspree.
5. Adicione certificações e cursos que você completou.

## Créditos

- Ícones: [Font Awesome](https://fontawesome.com/)
- Fontes: [Google Fonts](https://fonts.google.com/) (VT323 e Share Tech Mono)

---

Desenvolvido com ❤️ para destacar suas habilidades e atrair recrutadores!

