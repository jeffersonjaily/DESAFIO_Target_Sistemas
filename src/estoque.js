const dados = require('../data/dados.json');

class Produto {
    constructor(codigo, descricao, estoqueInicial) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.estoque = estoqueInicial;
        this.historico = [];
    }

    /**
     * @param {string} tipo - 'ENTRADA' ou 'SAIDA'
     * @param {number} quantidade 
     * @param {string} descricaoMovimentacao 
     */
    movimentar(tipo, quantidade, descricaoMovimentacao) {
        // Gera ID Único baseado em Timestamp + Random [cite: 47]
        const idUnico = `MOV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        console.log(`\n--- Tentativa de ${tipo}: ${this.descricao} (${quantidade} un) ---`);

        if (tipo === 'SAIDA') {
            if (this.estoque < quantidade) {
                console.error(`❌ ERRO: Estoque insuficiente! Disponível: ${this.estoque}`);
                return this.estoque;
            }
            this.estoque -= quantidade;
        } else if (tipo === 'ENTRADA') {
            this.estoque += quantidade;
        } else {
            console.error("Tipo inválido.");
            return this.estoque;
        }

        // Registra log histórico [cite: 48]
        this.historico.push({
            id: idUnico,
            tipo,
            qtd: quantidade,
            desc: descricaoMovimentacao,
            data: new Date().toISOString()
        });

        console.log(`✅ Sucesso! ID: ${idUnico}`);
        console.log(`📦 Estoque Final: ${this.estoque}`); // [cite: 49]
        return this.estoque;
    }
}

// === EXECUÇÃO DO MVP ===

// Carregando o primeiro produto do JSON (Caneta Azul)
const dadosProduto = dados.estoque[0];
const produtoMVP = new Produto(dadosProduto.codigoProduto, dadosProduto.descricaoProduto, dadosProduto.estoque);

console.log(`Estado Inicial: ${produtoMVP.descricao} | Qtd: ${produtoMVP.estoque}`);

// Teste 1: Saída (Venda)
produtoMVP.movimentar('SAIDA', 50, 'Venda para papelaria');

// Teste 2: Entrada (Reposição)
produtoMVP.movimentar('ENTRADA', 200, 'Chegada do fornecedor');

// Teste 3: Erro (Saída maior que estoque)
produtoMVP.movimentar('SAIDA', 500, 'Tentativa de venda grande');