function createProduct(title, description, itens, components) {
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
            <p>valor</p>
        </div>
    </div>`)
    
    const ITEM = document.createElement('div');
    ITEM.innerHTML = HTML;
    TAG.appendChild(ITEM);    
}

createProduct('Batata Frita','Deliciosa porção de fritas.','Entradas/Batata Frita',);
createProduct('Batata Frita com Cheddar e Bacon', 'Nossa incrível batata com cheddar e bacon.','Entradas/Batata Frita Cheddar e Bacon');
createProduct('Batata Frita com Costela', 'Nossa batata frita 300g com nosso delicioso creme cheese e costela desfila com barbecue.','Entradas/Batata Frita com Costela');
createProduct('Onion Rings', 'Anéis de cebolas empanadas.','Entradas/Onion Rings');
createProduct('Bolinha de Queijo', 'Porção de 12 bolinhas de queijo fritas na hora.','Entradas/Bolinha de Queijo');
createProduct('Nuggets de Frango', 'Porção de 12 Nuggets fritos na hora.','Entradas/Nuggets de Frango');

createProduct('Combo 1', 'Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial. Acompanha anéis de cebola e uma bebida a sua escolha.','Combos/Combo 1');
createProduct('Combo 2', 'Feito com queijo muçarela, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 2');
createProduct('Combo 3', 'Feito com queijo muçarela de búfala, tomate seco artesanal, molho de pesto e rúcula no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 3');
createProduct('Combo 4', 'São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 4');
createProduct('Combo 5', 'Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 5');
createProduct('Combo 6', 'Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa. Acompanha fritas temperadas e uma bebida a sua escolha.','Combos/Combo 6');

createProduct('Burger 1','Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.','Burgers/Burger 1');
createProduct('Burger 2','Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.','Burgers/Burger 2');
createProduct('Burger 3','Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.','Burgers/Burger 3');
createProduct('Burger 4','São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.','Burgers/Burger 4');
createProduct('Burger 5','Feito com queijo muçarela, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche.','Burgers/Burger 5');
createProduct('Burger 6','Feito com queijo muçarela de búfala, tomate seco artesanal, molho de pesto e rúcula no pão brioche.','Burgers/Burger 6');

createProduct('Água sem Gás','500 ml de água sem gás','Bebidas/Água com Gás');
createProduct('Água com Gás','500 ml de água com gás','Bebidas/Água sem Gás');
createProduct('Refrigerante','350 ml de refrigerante','Bebidas/Refrigerante');
createProduct('Suco','350 ml de diversos tipos de suco da fruta (verificar disponibilida de sucos)','Bebidas/Sucos Variados');
createProduct('Chopp','Caneca de Chopp de 500ml','Bebidas/Caneca de Chopp');
createProduct('Sex on the Beach','Vodka, licor de pêssego, suco de laranja, roselha, rodelas de laranja e uma cereja.','Bebidas/Sex on the Beach');
createProduct('Cuba Libre','Coquetel feito à base de rum, refrigerante de cola e limão.','Bebidas/Cuba Libre');
createProduct('Caipirinha','Coquetel brasileiro feito com cachaça, limão, açúcar e gelo moído.','Bebidas/Caipirinha');

createProduct('Pudim','Doce caseiro feito com receita de vó.','Sobremesas/Pudim');
createProduct('Mousse de limão com chocolate','Leva creme de leite, leite condensado, gelatina, chocolate e chá de suco de limão.','Sobremesas/Mousse de limão com chocolate');
createProduct('Pavê de chocolate','Feito com biscoito champanhe, chocolate picado, creme de leite e leite condensado','Sobremesas/Pavê de chocolate');
createProduct('Delícia de abacaxi','Leva creme de leite, leite condensado, ovos, açúcar e abacaxi','Sobremesas/Delícia de abacaxi');
createProduct('Petit gateau','Bolinho quente de chocolate acompanhando com sorvete de creme.','Sobremesas/Petit gateau');


