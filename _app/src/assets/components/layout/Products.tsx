import Product from './Product';
import './Products.css'

export default function Products() {

    const produtos = {
        "nome": "PHP Burger", 
        "url": "../../imagens/Produtos/Burgers/PhpBurger.jpg", 
        "preco": 20.99, 
        "descricao": "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.", 
        "tolerancia": ["../../imagens/Selos/glutem.jpg", "./../imagens/Selos/lactose.jpg", "./../imagens/Selos/sugar.jpg"]
    }

    return (
        <div className='db-products'>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
            <Product nome={produtos.nome} url={produtos.url} preco={produtos.preco} descricao={produtos.descricao} tolerancia={produtos.tolerancia}/>
        </div>
    )
}