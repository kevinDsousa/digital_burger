function createProduct(title, description, itens, valor , components) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#combos');
    const HTML = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/${itens}" alt="">
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

createProduct('Combo Full Stack', 'Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial. Acompanha anéis de cebola e uma bebida a sua escolha.','Combos/Combo 1.jpg','R$32,99', ["", "", ""]);
createProduct('Combo Junior Developer', 'Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 2.jpg', 'R$32,99', ["", "", ""]);
createProduct('Combo Pleno Developer', 'Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 3.jpg','R$29,99', ["", "", ""]);
createProduct('Combo Senior Developer', 'São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 4.jpg','R$42,99', ["", "", ""]);
createProduct('Combo Scrum Master', 'Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 5.jpg','R$39,99', ["", "", ""]);
createProduct('Combo Drop Data Base', 'Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 6.jpg','R$34,99', ["", "", ""]);
