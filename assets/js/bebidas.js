function createProduct(title, description, itens, valor) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#bebidas');
    const HTML = (`
    <button class="btn " id="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <div class="content">
            <div class="pictures">
                <img src="./assets/images/bebidas/${itens}" alt="">
            </div>
            <div class="pictures-text">
                <h2>${title}</h2>
                <p>${description}</p>
                <span>${valor}</span>
            </div>
        </div>
    </button>
    

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Digital Burguer</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    <div class="pictures">
    <img src="./assets/images/bebidas/${itens}" alt="">
  </div>
  <div class="pictures-text">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>${valor}</span>
  </div>
    </div>
  </div>
`)
    
    const ITEM = document.createElement('div');
    ITEM.innerHTML = HTML;
    TAG.appendChild(ITEM);    
}




 
    createProduct('Água sem Gás','500 ml de água sem gás','Água sem Gás.jpg','R$6,00');
    createProduct('Água com Gás','500 ml de água com gás','Água com Gás.jpg','R$6,00');
    createProduct('Refrigerante','350 ml de refrigerante','Refrigerante.jpg','R$8,00');
    createProduct('Suco','500 ml de diversos tipos de suco da fruta (verificar disponibilida de sucos)','Sucos Variados.jpg','R$10,00');
    createProduct('Chopp','Caneca de Chopp de 500ml','Caneca de Chopp.jpg','R$8,00');
    createProduct('Sex on Nathan Beach','Vodka, licor de pêssego, suco de laranja, roselha, rodelas de laranja e uma cereja.','Sex on the Beach.jpg','R$24,99');
    createProduct('Lucas Libre','Coquetel feito à base de rum, refrigerante de cola e limão.','Cuba Libre.jpg','R$16,99');
    createProduct('Caipirinha do Dudu','Coquetel brasileiro feito com cachaça, limão, açúcar e gelo moído.','Caipirinha.jpg','R$14,99');


