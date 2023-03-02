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
            <img src="./assets/images/${itens}" alt="">
            <div class="components">
            <ul>
                <li><img src="${components[0]}"></img></li>
                <li><img src="${components[1]}"></img></li>
                <li><img src="${components[2]}"></img></li>
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

createProduct('Pudim','Doce caseiro feito com receita de vó.','Sobremesas/Pudim.jpg','R$15,00', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);
createProduct('Mousse de limão com chocolate','Leva creme de leite, leite condensado, gelatina, chocolate e chá de suco de limão.','Sobremesas/Mousse de limão com chocolate.jpg','R$15,00', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);
createProduct('Pavê de chocolate','Feito com biscoito champanhe, chocolate picado, creme de leite e leite condensado','Sobremesas/Pavê de chocolate.jpg','R$18,00', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);
createProduct('Delícia de abacaxi','Leva creme de leite, leite condensado, ovos, açúcar e abacaxi','Sobremesas/Delícia de abacaxi.jpg','R$18,00', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);
createProduct('Petit gateau','Bolinho quente de chocolate acompanhando com sorvete de creme.','Sobremesas/Petit gateau.jpg','R$20,00', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);
createProduct('Milk Shake','3 bolas de sorvete de creme, 2 doses (80 ml) de café expresso, 50 ml de calda de chocolate, 100 ml de leite e castanha de caju picadinha.','Sobremesas/Milk Shake.jpg','R$29,99', ["/assets/images/Selos/Selo Açúcar.jpg", "/assets/images/Selos/Selo Glúten.jpg", "/assets/images/Selos/Selo Lactose.jpg"]);



