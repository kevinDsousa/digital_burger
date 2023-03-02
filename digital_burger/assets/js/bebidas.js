function createProduct(title, description, itens, valor , components) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#bebidas');
    const HTML = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/${itens}.jpg" alt="">
        </div>
        <div class="pictures-text">
            <h2>${title}</h2>
            <p>${description}</p>
            <span>${valor}</span>
        </div>
    </div>
`)
    
    const ITEM = document.createElement('div');
    ITEM.innerHTML = HTML;
    TAG.appendChild(ITEM);    
}

createProduct('Água sem Gás','500 ml de água sem gás','Bebidas/Água com Gás','R$6,00');
createProduct('Água com Gás','500 ml de água com gás','Bebidas/Água sem Gás','R$6,00');
createProduct('Refrigerante','350 ml de refrigerante','Bebidas/Refrigerante','R$8,00');
createProduct('Suco','500 ml de diversos tipos de suco da fruta (verificar disponibilida de sucos)','Bebidas/Sucos Variados','R$10,00');
createProduct('Chopp','Caneca de Chopp de 500ml','Bebidas/Caneca de Chopp','R$8,00');
createProduct('Sex on Nathan Beach','Vodka, licor de pêssego, suco de laranja, roselha, rodelas de laranja e uma cereja.','Bebidas/Sex on the Beach','R$24,99');
createProduct('Lucas Libre','Coquetel feito à base de rum, refrigerante de cola e limão.','Bebidas/Cuba Libre','R$16,99');
createProduct('Caipirinha do Dudu','Coquetel brasileiro feito com cachaça, limão, açúcar e gelo moído.','Bebidas/Caipirinha','R$14,99');
