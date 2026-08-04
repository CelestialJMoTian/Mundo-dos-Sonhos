document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idJogo = urlParams.get('jogo');

    if (!idJogo || !bancoDeDadosJogos[idJogo]) {
        alert("Encanto quebrado! Jogo nao encontrado.");
        window.location.href = '../../index.html';
        return;
    }

    const dadosJogo = bancoDeDadosJogos[idJogo];
    let deslocamentoQuadroY = 0;
    let etapaAtualIndex = 0;
    
    const telaApresentacao = document.getElementById('tela-apresentacao');
    const modalOrientacao = document.getElementById('modal-orientacao');
    const motorJogo = document.getElementById('motor-jogo');
    const modalParabens = document.getElementById('modal-parabens');
    const telaArteFinal = document.getElementById('tela-arte-final');
    const musicaFundo = document.getElementById('musica-fundo');

    // GERADOR DE EFEITOS SONOROS MÁGICOS VIA WEB AUDIO API
    let audioCtx = null;
    function iniciarAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // EFEITO MÁGICO INICIAL (3 a 5 segundos - Arpejo de Princesa/Fada brilhante)
    function tocarSomMagicoInicio() {
        try {
            iniciarAudioContext();
            const notas = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00]; // Dó, Mi, Sol, Dó...
            const agora = audioCtx.currentTime;

            notas.forEach((freq, index) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, agora + (index * 0.35));

                gain.gain.setValueAtTime(0, agora + (index * 0.35));
                gain.gain.linearRampToValueAtTime(0.2, agora + (index * 0.35) + 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, agora + (index * 0.35) + 1.2);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(agora + (index * 0.35));
                osc.stop(agora + (index * 0.35) + 1.2);
            });
        } catch (e) {
            console.log("Áudio bloqueado aguardando interação", e);
        }
    }

    // EFEITO MÁGICO FINAL (Na hora de aparecer o Parabéns / Pronto)
    function tocarSomMagicoFinal() {
        try {
            iniciarAudioContext();
            const notas = [659.25, 783.99, 987.77, 1318.51, 1567.98];
            const agora = audioCtx.currentTime;

            notas.forEach((freq, index) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, agora + (index * 0.25));

                gain.gain.setValueAtTime(0, agora + (index * 0.25));
                gain.gain.linearRampToValueAtTime(0.25, agora + (index * 0.25) + 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, agora + (index * 0.25) + 1.5);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(agora + (index * 0.25));
                osc.stop(agora + (index * 0.25) + 1.5);
            });
        } catch (e) {
            console.log("Áudio final bloqueado", e);
        }
    }

    function pathSeguro(caminho) {
        return encodeURI('../../' + caminho);
    }

    document.getElementById('apresentacao-titulo').innerText = dadosJogo.nome;
    document.getElementById('apresentacao-capa').src = pathSeguro(dadosJogo.imagens['capa']);
    renderizarCapturas();

    document.getElementById('btn-iniciar-jogar').addEventListener('click', () => {
        iniciarAudioContext();
        modalOrientacao.classList.remove('escondido');
        modalOrientacao.classList.add('ativo');
    });

    document.getElementById('btn-opt-vertical').addEventListener('click', () => iniciarEngine('vertical'));
    document.getElementById('btn-opt-horizontal').addEventListener('click', () => iniciarEngine('horizontal'));

    function iniciarEngine(orientacao) {
        modalOrientacao.classList.remove('ativo');
        modalOrientacao.classList.add('escondido');
        telaApresentacao.classList.add('escondido');
        motorJogo.classList.remove('escondido');

        // INICIA A MÚSICA MP3 DE FUNDO E O SOM MÁGICO LONGO
        if (musicaFundo) {
            musicaFundo.volume = 0.5;
            musicaFundo.play().catch(err => console.log("Autoplay impedido pelo navegador", err));
        }
        tocarSomMagicoInicio();

        if (orientacao === 'vertical') {
            motorJogo.classList.add('layout-vertical');
            document.getElementById('bg-menu-interativo').src = pathSeguro(dadosJogo.imagens['vertical_embaixo']);
        } else {
            motorJogo.classList.add('layout-horizontal');
            document.getElementById('bg-menu-interativo').src = pathSeguro(dadosJogo.imagens['horizontal_lateral_direita']);
        }

        document.getElementById('icone-voltar').src = pathSeguro(dadosJogo.botoes['btn_voltar']);
        
        if (dadosJogo.botoes['btn_setacima']) {
            document.getElementById('btn-quadro-cima').src = pathSeguro(dadosJogo.botoes['btn_setacima']);
        }
        if (dadosJogo.botoes['btn_setabaixo']) {
            document.getElementById('btn-quadro-baixo').src = pathSeguro(dadosJogo.botoes['btn_setabaixo']);
        }

        document.getElementById('btn-voltar-apresentacao').onclick = () => {
            if (musicaFundo) {
                musicaFundo.pause();
                musicaFundo.currentTime = 0;
            }
            motorJogo.classList.add('escondido');
            telaApresentacao.classList.remove('escondido');
            motorJogo.classList.remove('layout-vertical', 'layout-horizontal');
            document.getElementById('controles-quadro').classList.add('escondido');
        };

        etapaAtualIndex = 0;
        carregarEtapaSequencial();
    }

    const etapasJogo = [
        { 
            nome: 'Cama & Quarto', 
            camada: 1, 
            imagens: [
                'quartoazul_camaazul', 'quartoazul_camarosa', 'quartoazul_camaroxa', 'quartoazul_camavermelha', 
                'quartorosa_camaazul', 'quartorosa_camarosa', 'quartorosa_camaroxa', 'quartorosa_camavermelha', 
                'quartoroxo_camaazul', 'quartoroxo_camarosa', 'quartoroxo_camaroxa', 'quartoroxo_camavermelha', 
                'quartovermelho_camaazul', 'quartovermelho_camarosa', 'quartovermelho_camaroxa', 'quartovermelho_camavermelha'
            ] 
        },
        { 
            nome: 'Móveis', 
            camada: 2, 
            imagens: ['movel_guardaroupa', 'movel_penteadeira', 'movel_prateleiradepelucia', 'movel_comoda'] 
        },
        { 
            nome: 'Quadros', 
            camada: 3, 
            imagens: [
                'quadro_redondo1', 'quadro_redondo2', 'quadro_redondo3', 'quadro_redondo4', 
                'quadro_retangular1', 'quadro_retangular2', 'quadro_retangular3', 'quadro_retangular4'
            ] 
        },
        { 
            nome: 'Roupas', 
            camada: 6, 
            camadaSilhueta: 5, 
            imagens: ['vestido_rosa', 'vestido_roxo', 'vestido_vermelho', 'vestido_azul'] 
        },
        { 
            nome: 'Colares', 
            camada: 7, 
            imagens: ['colar_azul', 'colar_rosa', 'colar_roxo', 'colar_vermelho'] 
        },
        { 
            nome: 'Cabelos', 
            camada: 8, 
            imagens: ['cabelo_azul', 'cabelo_rosa', 'cabelo_roxo', 'cabelo_vermelho'] 
        },
        { 
            nome: 'Pets', 
            camada: 4, 
            imagens: ['pet_cobra', 'pet_dragao', 'pet_fada', 'pet_gato'] 
        }
    ];

    function carregarEtapaSequencial() {
        const etapa = etapasJogo[etapaAtualIndex];
        const tituloEl = document.getElementById('titulo-etapa-atual');
        if (tituloEl) {
            tituloEl.innerText = etapa.nome;
        }
        
        const divItens = document.getElementById('botoes-itens');
        divItens.innerHTML = '';

        const controlesQuadro = document.getElementById('controles-quadro');
        if (etapa.camada === 3) {
            controlesQuadro.classList.remove('escondido');
        } else {
            controlesQuadro.classList.add('escondido');
        }

        etapa.imagens.forEach(imgKey => {
            const btn = document.createElement('img');
            btn.className = 'btn-img-jogo';
            
            let chaveBotaoBanco = 'btn_' + imgKey;
            if (!dadosJogo.botoes[chaveBotaoBanco]) {
                let chaveSemUnderline = 'btn_' + imgKey.replace('_', '');
                if (dadosJogo.botoes[chaveSemUnderline]) {
                    chaveBotaoBanco = chaveSemUnderline;
                }
            }
            
            if (dadosJogo.botoes[chaveBotaoBanco]) {
                btn.src = pathSeguro(dadosJogo.botoes[chaveBotaoBanco]);
            } else {
                btn.src = pathSeguro(dadosJogo.imagens[imgKey]);
            }

            btn.onerror = function() {
                this.src = pathSeguro(dadosJogo.imagens[imgKey]);
            };
            
            btn.onclick = () => {
                aplicarCamada(etapa.camada, imgKey);
                
                if (etapa.camadaSilhueta) {
                    aplicarCamada(etapa.camadaSilhueta, 'silhueta');
                }
            };
            divItens.appendChild(btn);
        });

        const btnAnterior = document.getElementById('btn-etapa-anterior');
        const btnProxima = document.getElementById('btn-etapa-proxima');
        
        if (btnAnterior) btnAnterior.style.visibility = etapaAtualIndex === 0 ? 'hidden' : 'visible';
        if (btnProxima) btnProxima.innerText = etapaAtualIndex === etapasJogo.length - 1 ? 'Concluir' : 'Próximo';
    }

    // AÇÃO DE CONCLUIR / PRÓXIMO
    const btnProximaEl = document.getElementById('btn-etapa-proxima');
    if (btnProximaEl) {
        btnProximaEl.onclick = () => {
            if (etapaAtualIndex < etapasJogo.length - 1) {
                etapaAtualIndex++;
                carregarEtapaSequencial();
            } else {
                // FIM DO JOGO: PARA A MÚSICA MP3 E TOCA O SOM MÁGICO DE PARABÉNS
                if (musicaFundo) {
                    musicaFundo.pause();
                    musicaFundo.currentTime = 0;
                }
                tocarSomMagicoFinal();
                modalParabens.classList.remove('escondido');
                modalParabens.classList.add('ativo');
            }
        };
    }

    const btnAnteriorEl = document.getElementById('btn-etapa-anterior');
    if (btnAnteriorEl) {
        btnAnteriorEl.onclick = () => {
            if (etapaAtualIndex > 0) {
                etapaAtualIndex--;
                carregarEtapaSequencial();
            }
        };
    }

    function aplicarCamada(numCamada, imgKey) {
        const imgCamada = document.getElementById('camada-' + numCamada);
        imgCamada.src = pathSeguro(dadosJogo.imagens[imgKey]);
        imgCamada.classList.remove('escondido');
        imgCamada.setAttribute('data-img-key', imgKey);
        
        if (numCamada === 3) {
            deslocamentoQuadroY = 0;
            imgCamada.style.transform = `translateY(0px)`;
        }
    }

    const btnQuadroCima = document.getElementById('btn-quadro-cima');
    if (btnQuadroCima) btnQuadroCima.onclick = () => moverQuadro(-15);

    const btnQuadroBaixo = document.getElementById('btn-quadro-baixo');
    if (btnQuadroBaixo) btnQuadroBaixo.onclick = () => moverQuadro(15);

    function moverQuadro(valor) {
        const camadaQuadro = document.getElementById('camada-3');
        deslocamentoQuadroY += valor;
        camadaQuadro.style.transform = `translateY(${deslocamentoQuadroY}px)`;
    }

    // BOTÃO PRONTO (DO TOPO)
    const btnPronto = document.getElementById('btn-pronto');
    if (btnPronto) {
        btnPronto.onclick = () => {
            if (musicaFundo) {
                musicaFundo.pause();
                musicaFundo.currentTime = 0;
            }
            tocarSomMagicoFinal();
            modalParabens.classList.remove('escondido');
            modalParabens.classList.add('ativo');
        };
    }

    const btnVerArte = document.getElementById('btn-ver-arte');
    if (btnVerArte) {
        btnVerArte.onclick = () => {
            modalParabens.classList.remove('ativo');
            modalParabens.classList.add('escondido');
            motorJogo.classList.add('escondido');
            telaArteFinal.classList.remove('escondido');
            gerarCanvasFinal();
        };
    }

    const btnFecharFinal = document.getElementById('btn-fechar-final');
    if (btnFecharFinal) {
        btnFecharFinal.onclick = () => {
            telaArteFinal.classList.add('escondido');
            motorJogo.classList.remove('escondido');
        };
    }

    function gerarCanvasFinal() {
        const canvas = document.getElementById('canvas-final');
        const ctx = canvas.getContext('2d');
        canvas.width = 1536;
        canvas.height = 1024;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const totalCamadas = 8;
        for (let i = 1; i <= totalCamadas; i++) {
            const imgHTML = document.getElementById('camada-' + i);
            if (!imgHTML.classList.contains('escondido') && imgHTML.src) {
                const imgObj = new Image();
                imgObj.src = imgHTML.src;
                imgObj.onload = () => {
                    let yOffset = 0;
                    if (i === 3) yOffset = deslocamentoQuadroY;
                    ctx.drawImage(imgObj, 0, yOffset, canvas.width, canvas.height);
                };
            }
        }
    }

    const btnBaixar = document.getElementById('btn-baixar-imagem');
    if (btnBaixar) {
        btnBaixar.onclick = () => {
            const canvas = document.getElementById('canvas-final');
            const imgURL = canvas.toDataURL("image/png");
            
            const a = document.createElement("a");
            a.href = imgURL;
            a.download = "Meu_Quarto_De_Princesa.png";
            a.click();

            salvarCaptura(imgURL);
            
            telaArteFinal.classList.add('escondido');
            motorJogo.classList.remove('layout-vertical', 'layout-horizontal');
            telaApresentacao.classList.remove('escondido');
            renderizarCapturas();
            
            for(let i=1; i<=8; i++) {
                document.getElementById('camada-'+i).src = "";
                document.getElementById('camada-'+i).classList.add('escondido');
            }
            document.getElementById('controles-quadro').classList.add('escondido');
            deslocamentoQuadroY = 0;
            document.getElementById('camada-3').style.transform = `translateY(0px)`;
        };
    }

    function salvarCaptura(base64) {
        let capturas = JSON.parse(localStorage.getItem('MundoSonhos_Capturas_' + idJogo)) || [];
        capturas.unshift(base64); 
        if(capturas.length > 6) capturas.pop(); 
        localStorage.setItem('MundoSonhos_Capturas_' + idJogo, JSON.stringify(capturas));
    }

    function renderizarCapturas() {
        const galeria = document.getElementById('galeria-capturas');
        galeria.innerHTML = '';
        const capturas = JSON.parse(localStorage.getItem('MundoSonhos_Capturas_' + idJogo)) || [];
        
        if(capturas.length === 0) {
            galeria.innerHTML = '<p style="font-size:12px; color:var(--texto-dim); grid-column: span 3;">Nenhum quarto salvo ainda. Jogue para salvar sua primeira arte!</p>';
            return;
        }

        capturas.forEach(imgBase64 => {
            const img = document.createElement('img');
            img.src = imgBase64;
            img.className = 'captura-item';
            galeria.appendChild(img);
        });
    }
});
