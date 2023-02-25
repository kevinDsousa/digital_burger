function createProduct(title, description, itens) {
    /** Gera o html dos produtos automagicamente. Para adicionar um novo produto, basta criar uma função no final deste arquivo passando os parametros solicitados.
     * @function createProduct
     * @param {string} title - Titulo no produto.
     * @param {string} description - Descrição do produto.
     * @param {string} itens - imagem do produto
     */
    const tag = document.querySelector('#burgers');
    const Html = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/burgers/${itens}.jpg" alt="">
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
        </div>
    </div>`)
    
    const item = document.createElement('div');
    item.innerHTML = Html;
    tag.appendChild(item);    
}

createProduct('python burger', 'teste de descriçao', 'dudu-burger');
createProduct('php burger', 'teste 123', 'eduardo-burger');
createProduct('php burger', 'esse daqui tbm e teste', 'gleison-burger');
createProduct('php burger', 'teste parametro', 'kevin-burger');
createProduct('php burger', 'eu nao sei se é teste', 'anady-burger');
createProduct('php burger', 'testei e deu certo', 'nathan-burger');

