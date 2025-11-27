
function calcularDividaAtualizada(valorOriginal, dataVencimentoString) {
    const hoje = new Date();
    
    hoje.setHours(0, 0, 0, 0);
    
   
    const vencimento = new Date(dataVencimentoString);
    vencimento.setHours(0,0,0,0);

    const taxaDiaria = 0.025; // 2.5%

    
    const diffTempo = hoje.getTime() - vencimento.getTime();
    const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24)); 

    if (diffDias <= 0) {
        return `A conta não está vencida. (Dias: ${diffDias})`;
    }

    const jurosTotal = valorOriginal * taxaDiaria * diffDias;
    const totalPagar = valorOriginal + jurosTotal;

    return {
        status: "VENCIDO",
        diasAtraso: diffDias,
        valorOriginal: valorOriginal,
        jurosCalculado: parseFloat(jurosTotal.toFixed(2)),
        totalPagar: parseFloat(totalPagar.toFixed(2))
    };
}

// Testando a função
console.log(calcularDividaAtualizada(1000, "2024-11-17"));