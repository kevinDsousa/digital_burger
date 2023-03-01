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

createProduct('Batata Frita','Deliciosa porção de fritas.','Entradas/Batata Frita','19,99 reais');
createProduct('Batata Frita com Cheddar e Bacon', 'Nossa incrível batata com cheddar e bacon.','Entradas/Batata Frita Cheddar e Bacon','27,99 reais');
createProduct('Batata Frita com Costela', 'Nossa batata frita 300g com nosso delicioso creme cheese e costela desfila com barbecue.','Entradas/Batata Frita com Costela','29,99 reais');
createProduct('Onion Rings', 'Anéis de cebolas empanadas.','Entradas/Onion Rings','24,99 reais');
createProduct('Bolinha de Queijo', 'Porção de 12 bolinhas de queijo fritas na hora.','Entradas/Bolinha de Queijo','24,99 reais');
createProduct('Nuggets de Frango', 'Porção de 12 Nuggets fritos na hora.','Entradas/Nuggets de Frango','19,99 reais');

createProduct('Combo 1', 'Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial. Acompanha anéis de cebola e uma bebida a sua escolha.','Combos/Combo 1','32,99 reais');
createProduct('Combo 2', 'Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 2', '32,99 reais');
createProduct('Combo 3', 'Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 3','29,99 reais');
createProduct('Combo 4', 'São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 4','42,99 reais');
createProduct('Combo 5', 'Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 5','39,99 reais');
createProduct('Combo 6', 'Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 6','34,99 reais');

createProduct('PhP Burger','Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.','Burgers/Burger 1','20,99 reais');
createProduct('Git Mac','Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Burgers/Burger 2','30,99 reais');
createProduct('C++ Burger','Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.','Burgers/Burger 3','24,99 reais');
createProduct('Javas Burger','São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.','Burgers/Burger 4','32,99 reais');
createProduct('Phyton Burger','Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche.','Burgers/Burger 5','22,99 reais');
createProduct('React Burger','Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche.','Burgers/Burger 6','21,99 reais');

createProduct('Água sem Gás','500 ml de água sem gás','Bebidas/Água com Gás','6,00 reais');
createProduct('Água com Gás','500 ml de água com gás','Bebidas/Água sem Gás','6,00 reais');
createProduct('Refrigerante','350 ml de refrigerante','Bebidas/Refrigerante','8,00 reais');
createProduct('Suco','500 ml de diversos tipos de suco da fruta (verificar disponibilida de sucos)','Bebidas/Sucos Variados','10,00 reais');
createProduct('Chopp','Caneca de Chopp de 500ml','Bebidas/Caneca de Chopp','8,00 reais');
createProduct('Sex on Nathan Beach','Vodka, licor de pêssego, suco de laranja, roselha, rodelas de laranja e uma cereja.','Bebidas/Sex on the Beach','24,99 reais');
createProduct('Lucas Libre','Coquetel feito à base de rum, refrigerante de cola e limão.','Bebidas/Cuba Libre','16,99 reais');
createProduct('Caipirinha do Dudu','Coquetel brasileiro feito com cachaça, limão, açúcar e gelo moído.','Bebidas/Caipirinha','14,99 reais');

createProduct('Pudim','Doce caseiro feito com receita de vó.','Sobremesas/Pudim','15,00 reais');
createProduct('Mousse de limão com chocolate','Leva creme de leite, leite condensado, gelatina, chocolate e chá de suco de limão.','Sobremesas/Mousse de limão com chocolate','15,00 reais');
createProduct('Pavê de chocolate','Feito com biscoito champanhe, chocolate picado, creme de leite e leite condensado','Sobremesas/Pavê de chocolate','18,00 reais');
createProduct('Delícia de abacaxi','Leva creme de leite, leite condensado, ovos, açúcar e abacaxi','Sobremesas/Delícia de abacaxi','18,00 reais');
createProduct('Petit gateau','Bolinho quente de chocolate acompanhando com sorvete de creme.','Sobremesas/Petit gateau','20,00 reais');


