const dadosVendas = require('./vendas.json'); // Supondo que o JSON [cite: 6] esteja num arquivo

const TAXA_BAIXA = 0.01; // 1%
const TAXA_ALTA = 0.05;  // 5%

function calcularComissao(valor) {
    if (valor < 100) return 0;
    if (valor < 500) return valor * TAXA_BAIXA;
    return valor * TAXA_ALTA;
}

// Processamento
const relatorio = dadosVendas.vendas.map(venda => {
    const comissao = calcularComissao(venda.valor);
    return {
        ...venda,
        comissao: parseFloat(comissao.toFixed(2)),
        valorFinal: parseFloat((venda.valor + comissao).toFixed(2))
    };
});

// Dica Extra: Agrupar por vendedor mostra proatividade!
console.table(relatorio);