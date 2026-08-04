document.addEventListener("DOMContentLoaded", () => {

    const cabecalhoHTML = `
    <header id="cabecalho-principal">
        <div class="cabecalho-esquerda">
            <div class="logo-container">
                <img src="arquivos/imagens/imagem-geral/logo.png" alt="Mundo dos Sonhos" class="logo-imagem">
            </div>
        </div>
        
        <div class="acoes-topo">
            <button class="btn-acao">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
            </button>
            <button class="btn-acao" id="btn-usuario-topo" title="Perfil">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </button>
            <button class="btn-acao">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </button>
            <button class="btn-acao">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
        </div>
    </header>
    `;

    const rodapeHTML = `
    <footer id="rodape-navegacao">
        <button class="btn-nav ativo" id="nav-jogos">
            <div class="icone-flutuante">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M21 9v4h-2V9h-2v4h-2V9h-2v4h-2V9H9v4H7V9H5v4H3V9H1v12h22V9h-2zm-3-4V1h-2v4h-2V3h-2v2h-2V3H8v2H6V3H4v2H2V1H0v6h24V1h-2v4zM12 4L8 8h8l-4-4z"/></svg>
            </div>
            <div class="icone-normal">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 9v4h-2V9h-2v4h-2V9h-2v4h-2V9H9v4H7V9H5v4H3V9H1v12h22V9h-2zm-3-4V1h-2v4h-2V3h-2v2h-2V3H8v2H6V3H4v2H2V1H0v6h24V1h-2v4z"/></svg>
            </div>
            <span>JOGOS</span>
        </button>
        
        <button class="btn-nav" id="nav-biblioteca">
            <div class="icone-flutuante">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM11 18.49c-1.15-.52-2.79-.99-4.5-.99-1.32 0-2.73.25-4 .75V7.49c1.13-.57 2.51-.99 4-.99 1.71 0 3.35.47 4.5.99v11z"/></svg>
            </div>
            <div class="icone-normal">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM11 18.49c-1.15-.52-2.79-.99-4.5-.99-1.32 0-2.73.25-4 .75V7.49c1.13-.57 2.51-.99 4-.99 1.71 0 3.35.47 4.5.99v11z"/></svg>
            </div>
            <span>BIBLIOTECA</span>
        </button>

        <button class="btn-nav" id="nav-perfil">
            <div class="icone-flutuante">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div class="icone-normal">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <span>PERFIL</span>
        </button>
    </footer>
    `;

    const containerCabecalho = document.getElementById('inserir-cabecalho');
    const containerRodape = document.getElementById('inserir-rodape');

    if (containerCabecalho) containerCabecalho.innerHTML = cabecalhoHTML;
    if (containerRodape) containerRodape.innerHTML = rodapeHTML;

    // Lógica de Troca de Abas (Jogos, Biblioteca, Perfil)
    setTimeout(() => {
        const btnJogos = document.getElementById('nav-jogos');
        const btnBib = document.getElementById('nav-biblioteca');
        const btnPerfil = document.getElementById('nav-perfil');
        
        const secaoJogos = document.getElementById('secao-jogos');
        const secaoBib = document.getElementById('secao-biblioteca');
        const secaoPerfil = document.getElementById('secao-perfil');

        if (btnJogos && btnBib && btnPerfil && secaoJogos && secaoBib && secaoPerfil) {
            btnJogos.addEventListener('click', () => {
                btnJogos.classList.add('ativo');
                btnBib.classList.remove('ativo');
                btnPerfil.classList.remove('ativo');

                secaoJogos.classList.add('ativa');
                secaoBib.classList.remove('ativa');
                secaoPerfil.classList.remove('ativa');
                window.scrollTo(0, 0);
            });

            btnBib.addEventListener('click', () => {
                btnBib.classList.add('ativo');
                btnJogos.classList.remove('ativo');
                btnPerfil.classList.remove('ativo');

                secaoBib.classList.add('ativa');
                secaoJogos.classList.remove('ativa');
                secaoPerfil.classList.remove('ativa');
                window.scrollTo(0, 0);
            });

            btnPerfil.addEventListener('click', () => {
                btnPerfil.classList.add('ativo');
                btnJogos.classList.remove('ativo');
                btnBib.classList.remove('ativo');

                secaoPerfil.classList.add('ativa');
                secaoJogos.classList.remove('ativa');
                secaoBib.classList.remove('ativa');
                window.scrollTo(0, 0);
            });
        }
    }, 100);
});
