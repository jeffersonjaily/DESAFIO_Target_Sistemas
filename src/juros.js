const TAXA_DIARIA = 0.025; // 2.5% 

function calcularJuros(valorOriginal, dataVencimentoString) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimentoString);

    // Zerar horas para calcular apenas dias inteiros de diferença
    hoje.setHours(0, 0, 0, 0);
    vencimento.setHours(0, 0, 0, 0);

    // Diferença em milissegundos convertida para dias
    const diferencaTempo = hoje.getTime() - vencimento.getTime();
    const diasAtraso = Math.ceil(diferencaTempo / (1000 * 3600 * 24));

    if (diasAtraso <= 0) {
        return { mensagem: "Boleto não está vencido.", total: valorOriginal };
    }

    const valorJuros = valorOriginal * TAXA_DIARIA * diasAtraso;
    const valorTotal = valorOriginal + valorJuros;

    return {
        original: valorOriginal,
        vencimento: dataVencimentoString,
        diasAtraso: diasAtraso,
        taxaAplicada: `${(TAXA_DIARIA * 100)}% ao dia`,
        jurosCalculado: valorJuros.toFixed(2),
        totalPagar: valorTotal.toFixed(2)
    };
}

// === TESTES ===
console.log("=== CÁLCULO DE JUROS ===");

// Cenário 1: Boleto de R$ 1000,00 vencido há 10 dias (Data fictícia para teste)
// Dica: Ajuste a data abaixo para uma data passada em relação ao dia que você rodar o código
const dataTeste = "2023-11-01"; 

const resultado = calcularJuros(1000.00, dataTeste);
console.table(resultado);