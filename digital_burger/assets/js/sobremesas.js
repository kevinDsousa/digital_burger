function createProduct(title, description, itens, valor , components) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#sobremesas');
    const HTML = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/${itens}.jpg" alt="">
            <div class="components">
                <ul>
                    <li><img src="https://www.linkpicture.com/q/egg_1.png"></img></li>
                    <li><img src="https://www.linkpicture.com/q/milk.png"></img></li>
                    <li><img src="https://www.linkpicture.com/q/pork.png"></img></li>
                </ul>
            </div>
        </div>
        <div class="pictures-text">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>valor: ${valor}</p>
        </div>
    </div>`)
    
    const ITEM = document.createElement('div');
    ITEM.innerHTML = HTML;
    TAG.appendChild(ITEM);    
}

createProduct('Pudim','Doce caseiro feito com receita de vó.','Sobremesas/Pudim','15,00 reais');
createProduct('Mousse de limão com chocolate','Leva creme de leite, leite condensado, gelatina, chocolate e chá de suco de limão.','Sobremesas/Mousse de limão com chocolate','15,00 reais');
createProduct('Pavê de chocolate','Feito com biscoito champanhe, chocolate picado, creme de leite e leite condensado','Sobremesas/Pavê de chocolate','18,00 reais');
createProduct('Delícia de abacaxi','Leva creme de leite, leite condensado, ovos, açúcar e abacaxi','Sobremesas/Delícia de abacaxi','18,00 reais');
createProduct('Petit gateau','Bolinho quente de chocolate acompanhando com sorvete de creme.','Sobremesas/Petit gateau','20,00 reais');


