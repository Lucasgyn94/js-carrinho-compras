let valorTotalCarrinho;
limpar();
const adicionar = () => {
    // Recuperação de valores: nome do produto, quantidade e preço
    let produto = document.getElementById("produto");
    let nomeProduto = produto.value.split("-")[0];
    let precoProduto = produto.value.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    /*Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada. */

    if (!nomeProduto || nomeProduto.trim() === "") {
        alert('Selecione um produto válido!');
        exit();
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida!');
        exit();
    }

    console.log(`Produto: ${produto.value}`);
    console.log(`Nome produto: ${nomeProduto}`);
    console.log(`Preço produto: ${precoProduto}`);
    console.log(`Quantidade: ${quantidade}`);

    // Calcular o preço, o nosso subtotal
    let subtotal = quantidade * precoProduto;
    console.log(`Subtotal: ${subtotal}`);
    
    // Adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos")

    let label = `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${precoProduto}</span></section>`;
    ``;
    carrinho.innerHTML += label;

    // Atualizar o valor total
    let valorTotal = document.getElementById("valor-total");
    valorTotalCarrinho += subtotal;
    valorTotal.innerText = `R$ ${valorTotalCarrinho}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    valorTotalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;

}