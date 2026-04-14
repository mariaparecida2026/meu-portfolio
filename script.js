const projetos = [{
        titulo: 'Meu Portfólio',
        desc: 'Design elegante com suporte a tema escuro.',
        imagem: './src/projeto.png',
        url: '#'
    },
    {
        titulo: 'Meu Portfólio React',
        desc: 'Estiloso e Moderno.',
        imagem: './src/projeto.png',
        url: '#'
    }
];

const containerProjetos = document.getElementById('lista-projetos');

containerProjetos.innerHTML = projetos.map(p => `
    <article class="cartao-projeto">
        <img src="${p.imagem}" alt="${p.titulo}" class="capa-projeto">
        <div class="info-projeto">
            <h3>${p.titulo}</h3>
            <a href="${p.url}" class="link-projeto">Explorar no GitHub →</a>
        </div>
    </article>
`).join('');

// Lógica de Tema
const btnTema = document.getElementById('botao-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('escuro');
    const icone = btnTema.querySelector('i');

    if (document.body.classList.contains('escuro')) {
        icone.className = 'fas fa-sun';
    } else {
        icone.className = 'fas fa-moon';
    }
});