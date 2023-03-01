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

createProduct('PhP Burger','Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.','Burgers/Burger 1','20,99 reais');
createProduct('Git Mac','Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Burgers/Burger 2','30,99 reais');
createProduct('C++ Burger','Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.','Burgers/Burger 3','24,99 reais');
createProduct('Javas Burger','São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.','Burgers/Burger 4','32,99 reais');
createProduct('Phyton Burger','Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche.','Burgers/Burger 5','22,99 reais');
createProduct('React Burger','Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche.','Burgers/Burger 6','21,99 reais');
