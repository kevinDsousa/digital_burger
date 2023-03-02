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
            <img src="./assets/images/Sobremesas/${itens}" alt="">
            <div class="components">
            <ul>
                <li><img src="./assets/images/Selos/${components[0]}"></img></li>
                <li><img src="./assets/images/Selos/${components[1]}"></img></li>
                <li><img src="./assets/images/Selos/${components[2]}"></img></li>
            </ul>
        </div>
        </div>
        <div class="pictures-text">
            <h2>${title}</h2>
            <p>${description}</p>
            <span>${valor}</span>
        </div>
    </div>`)
    
    const ITEM = document.createElement('div');
    ITEM.innerHTML = HTML;
    TAG.appendChild(ITEM);    
}

createProduct('Pudim','Doce caseiro feito com receita de vó.','Pudim.jpg','R$15,00', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);
createProduct('Mousse de limão com chocolate','Leva creme de leite, leite condensado, gelatina, chocolate e chá de suco de limão.','Mousse de Limão com Chocolate.jpg','R$15,00', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);
createProduct('Pavê de chocolate','Feito com biscoito champanhe, chocolate picado, creme de leite e leite condensado','Pavê de Chocolate.jpg','R$18,00', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);
createProduct('Delícia de abacaxi','Leva creme de leite, leite condensado, ovos, açúcar e abacaxi','Delícia de Abacaxi.jpg','R$18,00', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);
createProduct('Petit gateau','Bolinho quente de chocolate acompanhando com sorvete de creme.','Petit Gateau.jpg','R$20,00', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);
createProduct('Milk Shake','3 bolas de sorvete de creme, 2 doses (80 ml) de café expresso, 50 ml de calda de chocolate, 100 ml de leite e castanha de caju picadinha.','Milk Shake.jpg','R$29,99', ["Selo Açúcar.jpg", "Selo Glúten.jpg", "Selo Lactose.jpg"]);



