const dados = require('../data/vendas.json');

// Constantes para evitar "Magic Numbers" (Boas práticas)
const TAXAS = {
    FAIXA_ISENTA: { LIMITE: 100, VALOR: 0 },         // Abaixo de 100 [cite: 3]
    FAIXA_BAIXA:  { LIMITE: 500, VALOR: 0.01 },      // Abaixo de 500 (1%) [cite: 4]
    FAIXA_ALTA:   { VALOR: 0.05 }                    // Acima de 500 (5%) [cite: 5]
};

const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

function calcularComissao(valorVenda) {
    if (valorVenda < TAXAS.FAIXA_ISENTA.LIMITE) {
        return 0;
    } else if (valorVenda < TAXAS.FAIXA_BAIXA.LIMITE) {
        return valorVenda * TAXAS.FAIXA_BAIXA.VALOR;
    } else {
        return valorVenda * TAXAS.FAIXA_ALTA.VALOR;
    }
}

console.log("=== RELATÓRIO DE COMISSÕES ===");

const relatorio = dados.vendas.map(venda => {
    const valorComissao = calcularComissao(venda.valor);
    
    
    return {
        Vendedor: venda.vendedor,
        "Valor Venda": formatarMoeda(venda.valor),
        "Comissão Calc.": formatarMoeda(valorComissao),
        "Taxa Aplicada": valorComissao === 0 ? '0%' : (valorComissao / venda.valor * 100).toFixed(0) + '%'
    };
});

console.table(relatorio);