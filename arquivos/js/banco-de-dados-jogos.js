// ==========================================
// BANCO DE DADOS, JOGOS E IMAGEM
// ==========================================

const bancoDeDadosJogos = {

    // Jogo: Quarto de Princesa
    "quarto_de_princesa": {
        nome: "Quarto de Princesa",
        
        // Imagens do Jogo
        imagens: {
            "capa": "arquivos/imagens/Quarto de princesa/capa.png",
            "horizontal_lateral_direita": "arquivos/imagens/Quarto de princesa/horizontallateraldireita.png",
            "vertical_embaixo": "arquivos/imagens/Quarto de princesa/verticalembaixo.png",

            "vestido_rosa": "arquivos/imagens/Quarto de princesa/jogo/vestidorosa.png",
            "vestido_roxo": "arquivos/imagens/Quarto de princesa/jogo/vestidoroxo.png",
            "vestido_vermelho": "arquivos/imagens/Quarto de princesa/jogo/vestidovermelho.png",
            "vestido_azul": "arquivos/imagens/Quarto de princesa/jogo/vestidoazul.png",
            
            "quartoazul_camaazul": "arquivos/imagens/Quarto de princesa/jogo/quartoazul-camaazul.png",
            "quartoazul_camarosa": "arquivos/imagens/Quarto de princesa/jogo/quartoazul-camarosa.png",
            "quartoazul_camaroxa": "arquivos/imagens/Quarto de princesa/jogo/quartoazul-camaroxa.png",
            "quartoazul_camavermelha": "arquivos/imagens/Quarto de princesa/jogo/quartoazul-camavermelha.png",
            
            "quartorosa_camaazul": "arquivos/imagens/Quarto de princesa/jogo/quartorosa-camaazul.png",
            "quartorosa_camarosa": "arquivos/imagens/Quarto de princesa/jogo/quartorosa-camarosa.png",
            "quartorosa_camaroxa": "arquivos/imagens/Quarto de princesa/jogo/quartorosa-camaroxa.png",
            "quartorosa_camavermelha": "arquivos/imagens/Quarto de princesa/jogo/quartorosa-camavermelha.png",
            
            "quartoroxo_camaazul": "arquivos/imagens/Quarto de princesa/jogo/quartoroxo-camaazul.png",
            "quartoroxo_camarosa": "arquivos/imagens/Quarto de princesa/jogo/quartoroxo-camarosa.png",
            "quartoroxo_camaroxa": "arquivos/imagens/Quarto de princesa/jogo/quartoroxo-camaroxa.png",
            "quartoroxo_camavermelha": "arquivos/imagens/Quarto de princesa/jogo/quartoroxo-camavermelha.png",
            
            "quartovermelho_camaazul": "arquivos/imagens/Quarto de princesa/jogo/quartovermelho-camaazul.png",
            "quartovermelho_camarosa": "arquivos/imagens/Quarto de princesa/jogo/quartovermelho-camarosa.png",
            "quartovermelho_camaroxa": "arquivos/imagens/Quarto de princesa/jogo/quartovermelho-camaroxa.png",
            "quartovermelho_camavermelha": "arquivos/imagens/Quarto de princesa/jogo/quartovermelho-camavermelha.png",
            
            "movel_guardaroupa": "arquivos/imagens/Quarto de princesa/jogo/movelguardaroupa.png",
            "movel_penteadeira": "arquivos/imagens/Quarto de princesa/jogo/movelpenteadeira.png",
            "movel_prateleiradepelucia": "arquivos/imagens/Quarto de princesa/jogo/movelprateleiradepelucia.png",
            "movel_comoda": "arquivos/imagens/Quarto de princesa/jogo/movelcomoda.png",
            
            "quadro_redondo1": "arquivos/imagens/Quarto de princesa/jogo/quadroredondo1.png",
            "quadro_redondo2": "arquivos/imagens/Quarto de princesa/jogo/quadroredondo2.png",
            "quadro_redondo3": "arquivos/imagens/Quarto de princesa/jogo/quadroredondo3.png",
            "quadro_redondo4": "arquivos/imagens/Quarto de princesa/jogo/quadroredondo4.png",
            
            "quadro_retangular1": "arquivos/imagens/Quarto de princesa/jogo/quadroretangular1.png",
            "quadro_retangular2": "arquivos/imagens/Quarto de princesa/jogo/quadroretangular2.png",
            "quadro_retangular3": "arquivos/imagens/Quarto de princesa/jogo/quadroretangular3.png",
            "quadro_retangular4": "arquivos/imagens/Quarto de princesa/jogo/quadroretangular4.png",
            
            "silhueta": "arquivos/imagens/Quarto de princesa/jogo/silhueta.png",
            
            "pet_cobra": "arquivos/imagens/Quarto de princesa/jogo/petcobra.png",
            "pet_dragao": "arquivos/imagens/Quarto de princesa/jogo/petdragao.png",
            "pet_fada": "arquivos/imagens/Quarto de princesa/jogo/petfada.png",
            "pet_gato": "arquivos/imagens/Quarto de princesa/jogo/petgato.png",
            
            "cabelo_azul": "arquivos/imagens/Quarto de princesa/jogo/cabeloazul.png",
            "cabelo_rosa": "arquivos/imagens/Quarto de princesa/jogo/cabelorosa.png",
            "cabelo_roxo": "arquivos/imagens/Quarto de princesa/jogo/cabeloroxo.png",
            "cabelo_vermelho": "arquivos/imagens/Quarto de princesa/jogo/cabelovermelho.png",
            
            "colar_azul": "arquivos/imagens/Quarto de princesa/jogo/colarazul.png",
            "colar_rosa": "arquivos/imagens/Quarto de princesa/jogo/colarrosa.png",
            "colar_roxo": "arquivos/imagens/Quarto de princesa/jogo/colarroxo.png",
            "colar_vermelho": "arquivos/imagens/Quarto de princesa/jogo/colarvermelho.png"
        },

        // Botões do Jogo
        botoes: {
            "btn_quartoazul_camaazul": "arquivos/imagens/Quarto de princesa/botões/quartoazul-camaazul.png",
            "btn_quartoazul_camarosa": "arquivos/imagens/Quarto de princesa/botões/quartoazul-camarosa.png",
            "btn_quartoazul_camaroxa": "arquivos/imagens/Quarto de princesa/botões/quartoazul-camaroxa.png",
            "btn_quartoazul_camavermelha": "arquivos/imagens/Quarto de princesa/botões/quartoazul-camavermelha.png",

            "btn_quartorosa_camaazul": "arquivos/imagens/Quarto de princesa/botões/quartorosa-camaazul.png",
            "btn_quartorosa_camarosa": "arquivos/imagens/Quarto de princesa/botões/quartorosa-camarosa.png",
            "btn_quartorosa_camaroxa": "arquivos/imagens/Quarto de princesa/botões/quartorosa-camaroxa.png",
            "btn_quartorosa_camavermelha": "arquivos/imagens/Quarto de princesa/botões/quartorosa-camavermelha.png",

            "btn_quartoroxo_camaazul": "arquivos/imagens/Quarto de princesa/botões/quartoroxo-camaazul.png",
            "btn_quartoroxo_camarosa": "arquivos/imagens/Quarto de princesa/botões/quartoroxo-camarosa.png",
            "btn_quartoroxo_camaroxa": "arquivos/imagens/Quarto de princesa/botões/quartoroxo-camaroxa.png",
            "btn_quartoroxo_camavermelha": "arquivos/imagens/Quarto de princesa/botões/quartoroxo-camavermelha.png",
            
            "btn_quartovermelho_camaazul": "arquivos/imagens/Quarto de princesa/botões/quartovermelho-camaazul.png",
            "btn_quartovermelho_camarosa": "arquivos/imagens/Quarto de princesa/botões/quartovermelho-camarosa.png",
            "btn_quartovermelho_camaroxa": "arquivos/imagens/Quarto de princesa/botões/quartovermelho-camaroxa.png",
            "btn_quartovermelho_camavermelha": "arquivos/imagens/Quarto de princesa/botões/quartovermelho-camavermelha.png",
            
            "btn_colar_azul": "arquivos/imagens/Quarto de princesa/botões/colarazul.png",
            "btn_colar_rosa": "arquivos/imagens/Quarto de princesa/botões/colarrosa.png",
            "btn_colar_roxo": "arquivos/imagens/Quarto de princesa/botões/colarroxo.png",
            "btn_colar_vermelho": "arquivos/imagens/Quarto de princesa/botões/colarvermelho.png",
            
            "btn_vestido_azul": "arquivos/imagens/Quarto de princesa/botões/vestidoazul.png",
            "btn_vestido_rosa": "arquivos/imagens/Quarto de princesa/botões/vestidorosa.png",
            "btn_vestido_roxo": "arquivos/imagens/Quarto de princesa/botões/vestidoroxo.png",
            "btn_vestido_vermelho": "arquivos/imagens/Quarto de princesa/botões/vestidovermelho.png",
            
            "btn_cabelo_azul": "arquivos/imagens/Quarto de princesa/botões/cabeloazul.png",
            "btn_cabelo_rosa": "arquivos/imagens/Quarto de princesa/botões/cabelorosa.png",
            "btn_cabelo_roxo": "arquivos/imagens/Quarto de princesa/botões/cabeloroxo.png",
            "btn_cabelo_vermelho": "arquivos/imagens/Quarto de princesa/botões/cabelovermelho.png",

            "btn_movel_guardaroupa": "arquivos/imagens/Quarto de princesa/botões/movelguardaroupa.png",
            "btn_movel_penteadeira": "arquivos/imagens/Quarto de princesa/botões/movelpenteadeira.png",
            "btn_movel_prateleiradepelucia": "arquivos/imagens/Quarto de princesa/botões/movelprateleiradepelucia.png",
            "btn_movel_comoda": "arquivos/imagens/Quarto de princesa/botões/movelcomoda.png",

            "btn_quadro_redondo1": "arquivos/imagens/Quarto de princesa/botões/quadroredondo1.png",
            "btn_quadro_redondo2": "arquivos/imagens/Quarto de princesa/botões/quadroredondo2.png",
            "btn_quadro_redondo3": "arquivos/imagens/Quarto de princesa/botões/quadroredondo3.png",
            "btn_quadro_redondo4": "arquivos/imagens/Quarto de princesa/botões/quadroredondo4.png",
            
            "btn_quadro_retangular1": "arquivos/imagens/Quarto de princesa/botões/quadroretangular1.png",
            "btn_quadro_retangular2": "arquivos/imagens/Quarto de princesa/botões/quadroretangular2.png",
            "btn_quadro_retangular3": "arquivos/imagens/Quarto de princesa/botões/quadroretangular3.png",
            "btn_quadro_retangular4": "arquivos/imagens/Quarto de princesa/botões/quadroretangular4.png",

            "btn_pet_cobra": "arquivos/imagens/Quarto de princesa/botões/petcobra.png",
            "btn_pet_dragao": "arquivos/imagens/Quarto de princesa/botões/petdragao.png",
            "btn_pet_fada": "arquivos/imagens/Quarto de princesa/botões/petfada.png",
            "btn_pet_gato": "arquivos/imagens/Quarto de princesa/botões/petgato.png",
            
            "btn_setacima": "arquivos/imagens/Quarto de princesa/botões/setacima.png",
            "btn_setabaixo": "arquivos/imagens/Quarto de princesa/botões/setabaixo.png",
            "btn_voltar": "arquivos/imagens/Quarto de princesa/botões/voltar.png"
        }
    }

};

// Funções auxiliares para resgatar imagens ou botões pelo ID
function obterImagemJogo(idJogo, idImagem) {
    if (bancoDeDadosJogos[idJogo] && bancoDeDadosJogos[idJogo].imagens[idImagem]) {
        return bancoDeDadosJogos[idJogo].imagens[idImagem];
    }
    console.warn("Imagem nao encontrada no banco de dados para o ID: " + idImagem);
    return "";
}

function obterBotaoJogo(idJogo, idBotao) {
    if (bancoDeDadosJogos[idJogo] && bancoDeDadosJogos[idJogo].botoes[idBotao]) {
        return bancoDeDadosJogos[idJogo].botoes[idBotao];
    }
    console.warn("Botao nao encontrado no banco de dados para o ID: " + idBotao);
    return "";
}
