
# 🚀 Desafio Técnico - Desenvolvedor de Software

Este repositório contém as soluções desenvolvidas para o desafio técnico da etapa de seleção. O objetivo foi aplicar lógica de programação, orientação a objetos e boas práticas de código para resolver problemas de regras de negócio reais.

## 📋 Sobre o Desafio

O projeto consiste na resolução de três problemas distintos, implementando as seguintes regras de negócio:

### 1. Cálculo de Comissões de Vendas
Processamento de dados de um time comercial para calcular comissões baseadas em faixas de valores:
* **Vendas abaixo de R$100,00:** Não geram comissão.
* **Vendas entre R$100,00 e R$499,99:** Geram 1% de comissão.
* **Vendas a partir de R$500,00:** Geram 5% de comissão.

### 2. Gestão de Estoque
Sistema para lançar movimentações de entrada e saída de mercadorias no depósito. Cada movimentação possui:
* Um número identificador único.
* Uma descrição para identificar o tipo da movimentação.
* Retorno da quantidade final do estoque do produto movimentado.

### 3. Cálculo de Juros
Algoritmo que calcula o valor atualizado de uma dívida baseada em valor original e data de vencimento.
* **Regra:** Multa de 2,5% ao dia sobre o valor original.

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (Node.js)
* **Ambiente:** Node.js (v18+ recomendado)
* **Controle de Versão:** Git

## 📂 Estrutura do Projeto

A organização das pastas separa a lógica da massa de dados:

```text
DESAFIO_Target_Sistemas/
│
├── src/
│   ├── comissao.js   # Lógica do desafio 1 (Comissões)
│   ├── estoque.js    # Lógica do desafio 2 (Classe Produto/Estoque)
│   └── juros.js      # Lógica do desafio 3 (Cálculo Financeiro)
│
├── data/
│   ├── vendas.json   # Massa de dados para teste (opcional)
│   └── estoque.json  # Dados de produtos (Desafio 2)
│ 
└── README.md
````

## ⚙️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a passo

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/jeffersonjaily/DESAFIO_Target_Sistemas.git](https://github.com/jeffersonjaily/DESAFIO_Target_Sistemas.git)
    cd DESAFIO_Target_Sistemas
    ```

2.  **Execute as soluções:**

      * **Para ver o Relatório de Comissões:**

        ```bash
        node src/comissao.js
        ```

      * **Para testar a Gestão de Estoque:**

        ```bash
        node src/estoque.js
        ```

      * **Para calcular Juros:**

        ```bash
        node src/juros.js
        ```

## 🧠 Detalhes da Implementação

  * **Clean Code:** Uso de constantes para taxas e mensagens de erro claras.
  * **Orientação a Objetos:** Utilizada no sistema de estoque para encapsular o estado do produto e garantir a integridade dos dados (ex: impedir estoque negativo).
  * **Tratamento de Datas:** Normalização de datas para garantir o cálculo preciso de dias corridos no módulo de juros.

-----

**Desenvolvido por Jefferson Jaily**
