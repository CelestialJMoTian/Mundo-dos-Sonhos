document.addEventListener("DOMContentLoaded", () => {

    // Listas Mágicas para os Dropdowns Customizados
    const listaPrincesas = ["Cinderela", "Rapunzel", "Branca de Neve", "Bela (A Bela e a Fera)", "Aurora (Bela Adormecida)", "Ariel (A Pequena Sereia)", "Moana", "Elsa (Frozen)", "Anna (Frozen)", "Jasmine (Aladdin)", "Mulan", "Tiana (A Princesa e o Sapo)", "Pocahontas"];
    const listaGeneros = ["Feminino", "Masculino", "Outros"];

    // FUNÇÕES DE ÁUDIO MÁGICO (Sintetizador nativo sem arquivos externos)
    function tocarSomMagia() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const notas = [523.25, 659.25, 783.99, 1046.50]; // Acorde brilhante (C5, E5, G5, C6)
            notas.forEach((freq, index) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime + index * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.08 + 0.6);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(audioCtx.currentTime + index * 0.08);
                osc.stop(audioCtx.currentTime + index * 0.08 + 0.6);
            });
        } catch (e) {
            console.log("Áudio não suportado neste navegador");
        }
    }

    function tocarSomTristeza() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const notas = [349.23, 329.63, 293.66, 220.00]; // Acorde menor descendente (Clima de maldição/quebra)
            notas.forEach((freq, index) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime + index * 0.2);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.2 + 0.8);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(audioCtx.currentTime + index * 0.2);
                osc.stop(audioCtx.currentTime + index * 0.2 + 0.8);
            });
        } catch (e) {
            console.log("Áudio não suportado neste navegador");
        }
    }

    // FUNÇÃO: Caixinha de Alerta Mágica
    function mostrarAlertaMagico(mensagem) {
        const modalMsg = document.getElementById("modal-mensagem");
        document.getElementById("texto-mensagem").innerHTML = mensagem;
        document.getElementById("icone-mensagem").innerHTML = `<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
        
        document.getElementById("botoes-mensagem").innerHTML = `
            <button class="modal-btn-salvar" id="btn-msg-ok" style="margin-top:0;">Entendido</button>
        `;
        modalMsg.classList.add("ativo");
        document.getElementById("btn-msg-ok").onclick = () => modalMsg.classList.remove("ativo");
    }

    // FUNÇÃO: Caixinha de Confirmação Mágica (Quebrar Encanto)
    function mostrarConfirmacaoMagica(mensagem, callbackSim) {
        const modalMsg = document.getElementById("modal-mensagem");
        document.getElementById("texto-mensagem").innerHTML = mensagem;
        
        document.getElementById("icone-mensagem").innerHTML = `<svg viewBox="0 0 24 24" width="40" height="40" fill="#fca7b8"><path d="M12 2c0 0-4 4-4 9.5C8 14.5 10 17 12 22c2-5 4-7.5 4-10.5C16 6 12 2 12 2zm0 13c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z"/></svg>`;
        
        document.getElementById("botoes-mensagem").innerHTML = `
            <button class="btn-editar-perfil" id="btn-msg-cancelar" style="width: 48%; justify-content: center; color: var(--texto-dim); border-color: var(--texto-dim);">Cancelar</button>
            <button class="btn-apagar-conta" id="btn-msg-confirmar" style="width: 48%; margin-top: 0; justify-content: center; padding: 10px;">Confirmar</button>
        `;
        modalMsg.classList.add("ativo");

        document.getElementById("btn-msg-cancelar").onclick = () => modalMsg.classList.remove("ativo");
        document.getElementById("btn-msg-confirmar").onclick = () => {
            modalMsg.classList.remove("ativo");
            callbackSim();
        };
    }

    // FUNÇÃO: Abrir Modal de Opções Customizado (Custom Select)
    function abrirModalOpcoes(titulo, opcoes, idInputEscondido, idTextoVisivel) {
        const modalOpcoes = document.getElementById("modal-opcoes");
        document.getElementById("titulo-modal-opcoes").innerText = titulo;
        
        const valorAtual = document.getElementById(idInputEscondido).value;
        const containerLista = document.getElementById("lista-opcoes-dinamica");
        containerLista.innerHTML = "";

        opcoes.forEach(opcao => {
            const divOpcao = document.createElement("div");
            divOpcao.className = "opcao-item" + (valorAtual === opcao ? " selecionado" : "");
            divOpcao.innerHTML = `
                <span>${opcao}</span>
                <div class="radio-falso"></div>
            `;
            
            divOpcao.onclick = () => {
                document.getElementById(idInputEscondido).value = opcao;
                document.getElementById(idTextoVisivel).innerText = opcao;
                
                if (idInputEscondido === "select-genero") {
                    const grupoOutro = document.getElementById("grupo-outro-genero");
                    if (opcao === "Outros") {
                        grupoOutro.style.display = "block";
                    } else {
                        grupoOutro.style.display = "none";
                        document.getElementById("input-outro-genero").value = "";
                    }
                }
                modalOpcoes.classList.remove("ativo");
            };
            containerLista.appendChild(divOpcao);
        });

        modalOpcoes.classList.add("ativo");
    }

    // LÓGICA PRINCIPAL DO PERFIL
    function iniciarModalPerfil() {
        const modal = document.getElementById("modal-perfil");
        const btnCriarPerfil = document.getElementById("btn-criar-perfil");
        const btnUsuarioTopo = document.getElementById("btn-usuario-topo");
        const btnFechar = document.getElementById("modal-fechar");
        const btnSalvar = document.getElementById("btn-salvar-perfil");
        
        const avatarOpcoes = document.querySelectorAll(".avatar-opcao");
        const inputApelido = document.getElementById("input-apelido");
        const inputPrincesa = document.getElementById("select-princesa");
        const textoPrincesa = document.getElementById("texto-princesa");
        const triggerPrincesa = document.getElementById("trigger-princesa");

        const inputGenero = document.getElementById("select-genero");
        const textoGenero = document.getElementById("texto-genero");
        const triggerGenero = document.getElementById("trigger-genero");

        const grupoOutroGenero = document.getElementById("grupo-outro-genero");
        const inputOutroGenero = document.getElementById("input-outro-genero");
        const perfilDinamico = document.getElementById("perfil-conteudo-dinamico");

        let avatarSelecionado = "arquivos/imagens/imagem-geral/perfil1.png";

        carregarPerfilSalvo();

        document.getElementById("btn-fechar-opcoes").onclick = () => document.getElementById("modal-opcoes").classList.remove("ativo");

        if (triggerPrincesa) {
            triggerPrincesa.onclick = () => {
                if (!triggerPrincesa.classList.contains("desativado")) {
                    abrirModalOpcoes("Escolha sua Princesa", listaPrincesas, "select-princesa", "texto-princesa");
                } else {
                    mostrarAlertaMagico("Você ainda não pode alterar sua Princesa favorita. Aguarde o prazo de 7 dias acabar!");
                }
            };
        }

        if (triggerGenero) {
            triggerGenero.onclick = () => {
                abrirModalOpcoes("Seu Gênero", listaGeneros, "select-genero", "texto-genero");
            };
        }

        avatarOpcoes.forEach(opcao => {
            opcao.addEventListener("click", () => {
                avatarOpcoes.forEach(o => o.classList.remove("selecionado"));
                opcao.classList.add("selecionado");
                avatarSelecionado = opcao.getAttribute("data-avatar");
            });
        });

        function abrirModal(e) {
            if (e) e.preventDefault();
            verificarBloqueio7Dias();
            if (modal) {
                modal.classList.add("ativo");
            }
        }

        document.addEventListener("click", (e) => {
            const alvoTopo = e.target.closest("#btn-usuario-topo");
            const alvoCriar = e.target.closest("#btn-criar-perfil");
            const alvoEditar = e.target.closest("#btn-editar-perfil");

            if (alvoTopo || alvoCriar || alvoEditar) {
                e.preventDefault();
                abrirModal();
            }
        });

        if (btnFechar) {
            btnFechar.addEventListener("click", (e) => {
                e.preventDefault();
                if (modal) modal.classList.remove("ativo");
            });
        }

        function verificarBloqueio7Dias() {
            const perfilSalvo = JSON.parse(localStorage.getItem("mundo_sonhos_perfil"));
            if (perfilSalvo && perfilSalvo.ultimaModificacao) {
                const agora = new Date().getTime();
                const diffDias = (agora - perfilSalvo.ultimaModificacao) / (1000 * 60 * 60 * 24);
                
                if (diffDias < 7) {
                    const diasRestantes = Math.ceil(7 - diffDias);
                    if (inputApelido) {
                        inputApelido.value = perfilSalvo.apelido;
                        inputApelido.disabled = true;
                    }

                    if (inputPrincesa && triggerPrincesa) {
                        inputPrincesa.value = perfilSalvo.princesaFavorita;
                        textoPrincesa.innerText = perfilSalvo.princesaFavorita;
                        triggerPrincesa.classList.add("desativado");
                    }
                } else {
                    if (inputApelido) inputApelido.disabled = false;
                    if (inputPrincesa && triggerPrincesa) triggerPrincesa.classList.remove("desativado");
                    
                    if (perfilSalvo.apelido && inputApelido) inputApelido.value = perfilSalvo.apelido;
                    if (perfilSalvo.princesaFavorita && inputPrincesa) {
                        inputPrincesa.value = perfilSalvo.princesaFavorita;
                        textoPrincesa.innerText = perfilSalvo.princesaFavorita;
                    }
                }

                if (perfilSalvo.genero && inputGenero) {
                    if (listaGeneros.includes(perfilSalvo.genero)) {
                        inputGenero.value = perfilSalvo.genero;
                        textoGenero.innerText = perfilSalvo.genero;
                        if (grupoOutroGenero) grupoOutroGenero.style.display = "none";
                    } else {
                        inputGenero.value = "Outros";
                        textoGenero.innerText = "Outros";
                        if (grupoOutroGenero) grupoOutroGenero.style.display = "block";
                        if (inputOutroGenero) inputOutroGenero.value = perfilSalvo.genero;
                    }
                }

                if (perfilSalvo.avatar) {
                    avatarSelecionado = perfilSalvo.avatar;
                    avatarOpcoes.forEach(op => {
                        if (op.getAttribute("data-avatar") === perfilSalvo.avatar) {
                            op.classList.add("selecionado");
                        } else {
                            op.classList.remove("selecionado");
                        }
                    });
                }
            }
        }

        if (btnSalvar) {
            btnSalvar.addEventListener("click", (e) => {
                e.preventDefault();
                const apelido = inputApelido ? inputApelido.value.trim() : "";
                const princesaFavorita = inputPrincesa ? inputPrincesa.value : "";
                let genero = inputGenero ? inputGenero.value : "";

                if (!apelido) {
                    mostrarAlertaMagico("Por favor, digite seu apelido!");
                    return;
                }
                if (!princesaFavorita) {
                    mostrarAlertaMagico("Por favor, escolha sua Princesa Favorita!");
                    return;
                }
                if (!genero) {
                    mostrarAlertaMagico("Por favor, selecione seu Gênero!");
                    return;
                }

                if (genero === "Outros") {
                    const outroVal = inputOutroGenero ? inputOutroGenero.value.trim() : "";
                    if (!outroVal) {
                        mostrarAlertaMagico("Por favor, especifique sua identidade/sexualidade!");
                        return;
                    }
                    genero = outroVal;
                }

                const perfilExistente = JSON.parse(localStorage.getItem("mundo_sonhos_perfil"));
                let ultimaModificacao = new Date().getTime();

                if (perfilExistente && perfilExistente.ultimaModificacao && inputApelido && inputApelido.disabled) {
                    ultimaModificacao = perfilExistente.ultimaModificacao;
                }

                const dadosPerfil = {
                    avatar: avatarSelecionado,
                    apelido: apelido,
                    princesaFavorita: princesaFavorita,
                    genero: genero,
                    ultimaModificacao: ultimaModificacao
                };

                localStorage.setItem("mundo_sonhos_perfil", JSON.stringify(dadosPerfil));
                
                // TOCA O SOM MÁGICO DE CONTO DE FADAS AO CRIAR/SALVAR A CONTA
                tocarSomMagia();

                if (modal) modal.classList.remove("ativo");
                renderizarPerfilNaTela(dadosPerfil);
            });
        }

        function carregarPerfilSalvo() {
            const perfilSalvo = JSON.parse(localStorage.getItem("mundo_sonhos_perfil"));
            if (perfilSalvo) {
                renderizarPerfilNaTela(perfilSalvo);
            }
        }

        function renderizarPerfilNaTela(dados) {
            if (!perfilDinamico) return;

            perfilDinamico.innerHTML = `
                <div class="painel-perfil">
                    
                    <div class="cartao-usuario">
                        <div class="avatar-grande">
                            <img src="${dados.avatar}" alt="Avatar">
                        </div>
                        <h2 class="nome-usuario fonte-serif">${dados.apelido}</h2>
                        
                        <div class="info-princesa">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--dourado-claro)"><path d="M5 16h14l1-8-4 3-4-6-4 6-4-3 1 8zm-2 2h18v2H3v-2z"/></svg>
                            <span>${dados.princesaFavorita}</span>
                        </div>
                        <div class="info-genero">${dados.genero}</div>
                        
                        <div class="badge-magia">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3l-1.5 3.5L14 8l3.5 1.5L19 13l1.5-3.5L24 8l-3.5-1.5L19 3zm-7 3l-2.5 5.5L4 14l5.5 2.5L12 22l2.5-5.5L20 14l-5.5-2.5L12 6z"/></svg>
                            <span>Magia: 0 pts</span>
                        </div>
                        
                        <button class="btn-editar-perfil" id="btn-editar-perfil">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                            <span>Editar Perfil</span>
                        </button>
                    </div>

                    <div class="menu-acoes-perfil">
                        <button class="btn-acao-perfil">
                            <div class="icone-acao">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
                            </div>
                            <span>Histórico</span>
                        </button>
                        
                        <button class="btn-acao-perfil">
                            <div class="icone-acao">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 6 18.5 6s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                            </div>
                            <span>Mais Jogos</span>
                        </button>
                        
                        <button class="btn-acao-perfil">
                            <div class="icone-acao">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                            </div>
                            <span>História</span>
                        </button>

                        <button class="btn-acao-perfil">
                            <div class="icone-acao">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            </div>
                            <span>Sobre o App</span>
                        </button>

                        <button class="btn-apagar-conta" id="btn-apagar-conta">
                            <div class="icone-acao">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2c0 0-4 4-4 9.5C8 14.5 10 17 12 22c2-5 4-7.5 4-10.5C16 6 12 2 12 2zm0 13c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z"/></svg>
                            </div>
                            <span>Quebrar Encanto (Apagar Conta)</span>
                        </button>
                    </div>
                    
                </div>
            `;

            const btnUsuarioTopo = document.getElementById("btn-usuario-topo");
            if (btnUsuarioTopo) {
                btnUsuarioTopo.innerHTML = `<img src="${dados.avatar}" class="avatar-topo" alt="Perfil">`;
            }

            const btnApagar = document.getElementById("btn-apagar-conta");
            if (btnApagar) {
                btnApagar.addEventListener("click", () => {
                    const msgBonita = "Você está prestes a quebrar o encanto mágico!<br><br>Isso apagará permanentemente seu perfil e todo o seu histórico salvo no aplicativo.<br><br>Tem certeza que deseja desfazer essa magia?";
                    mostrarConfirmacaoMagica(msgBonita, () => {
                        // TOCA O SOM DE TRISTEZA/MALDIÇÃO ANTES DE APAGAR
                        tocarSomTristeza();
                        setTimeout(() => {
                            localStorage.removeItem("mundo_sonhos_perfil");
                            window.location.reload(); 
                        }, 700); // Aguarda o som tocar antes de recarregar
                    });
                });
            }
        }
    }

    iniciarModalPerfil();
    setTimeout(iniciarModalPerfil, 350);
});
