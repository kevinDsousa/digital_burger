function createProduct(title, description, itens, valor , components) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#burgers');
    const HTML = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/Burgers/${itens}" alt="">
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

createProduct('PhP Burger','Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.','Burger 1.jpg','R$20,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
createProduct('Git Mac','Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue.','Burger 2.jpg','R$30,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
createProduct('C++ Burger','Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.','Burger 3.jpg','R$24,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
createProduct('Javas Burger','São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.','Burger 4.jpg','R$32,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
createProduct('Phyton Burger','Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche.','Burger 5.jpg','R$22,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
createProduct('React Burger','Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche.','Burger 6.jpg','R$21,99', ["Selo Glúten.jpg", "Selo Lactose.jpg", "Selo Vegetariano.jpg"]);
