
class Produto {
    constructor(codigo, descricao, estoqueInicial) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.estoque = estoqueInicial;
        this.historico = [];
    }

    movimentar(tipo, quantidade, descricaoMovimentacao) {
        // Gera ID Único simples
        const idUnico = Date.now() + Math.floor(Math.random() * 1000); 
        
        if (tipo === 'SAIDA') {
            if (this.estoque < quantidade) {
                console.error(`Erro: Estoque insuficiente para ${this.descricao}. Atual: ${this.estoque}`);
                return this.estoque;
            }
            this.estoque -= quantidade;
        } else if (tipo === 'ENTRADA') {
            this.estoque += quantidade;
        } else {
            console.error("Tipo de movimentação inválido");
            return;
        }

        // Registro do log (Auditoria é importante em sistemas reais)
        this.historico.push({
            id: idUnico,
            tipo,
            qtd: quantidade,
            desc: descricaoMovimentacao,
            data: new Date().toISOString()
        });

        console.log(`[${tipo}] ${this.descricao} | Qtd: ${quantidade} | Novo Estoque: ${this.estoque}`);
        return this.estoque;
    }
}

// Inicializando com os dados do JSON (Simulado)
const estoqueDados = [
    { "codigoProduto": 101, "descricaoProduto": "Caneta Azul", "estoque": 150 },
    { "codigoProduto": 102, "descricaoProduto": "Caderno Universitário", "estoque": 75 }
];

// Instanciando objetos
const produtos = estoqueDados.map(p => new Produto(p.codigoProduto, p.descricaoProduto, p.estoque));

// Testando
const caneta = produtos.find(p => p.codigo === 101);
if (caneta) {
    caneta.movimentar('SAIDA', 20, 'Venda Balcão');      // Estoque vai para 130
    caneta.movimentar('ENTRADA', 50, 'Reposição Fornecedor'); // Estoque vai para 180
}