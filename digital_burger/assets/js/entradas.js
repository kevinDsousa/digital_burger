function createProduct(title, description, itens, valor , components) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     * @param {Array} components - lista de componentes de formacao do item.
     */
    const TAG = document.querySelector('#entradas');
    const HTML = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/${itens}.jpg" alt="">
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

