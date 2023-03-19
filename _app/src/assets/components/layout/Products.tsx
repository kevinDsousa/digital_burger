import Product from './Product';
import './Products.css'

export default function Products() {

    const produtos = {
        burgers: {
            "nome": "PHP Burger",
            "url": "../../imagens/Produtos/Burgers/PhpBurger.jpg",
            "preco": 20.99,
            "descricao": "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.",
            "tolerancia": ["../../imagens/Selos/glutem.jpg", "./../imagens/Selos/lactose.jpg", "./../imagens/Selos/sugar.jpg"]
        },
        combos: {
            "nome": "Combo Desenvolvedor Junior",
            "url": "../../imagens/Produtos/Combo 1.jpg",
            "preco": 35.99,
            "descricao": "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial. Acompanha anéis de cebola e uma bebida a sua escolha.",
            "tolerancia": ["../../imagens/Selos/glutem.jpg", "./../imagens/Selos/lactose.jpg", "./../imagens/Selos/sugar.jpg"]
        }
    }

    return (
        <>
            <h2 className='db-products-title'>Combos</h2>
            <div className='db-products'>
                <Product nome={produtos.combos.nome} url={produtos.combos.url} preco={produtos.combos.preco} descricao={produtos.combos.descricao} tolerancia={produtos.combos.tolerancia}/>
                <Product nome={produtos.combos.nome} url={produtos.combos.url} preco={produtos.combos.preco} descricao={produtos.combos.descricao} tolerancia={produtos.combos.tolerancia}/>
                <Product nome={produtos.combos.nome} url={produtos.combos.url} preco={produtos.combos.preco} descricao={produtos.combos.descricao} tolerancia={produtos.combos.tolerancia}/>
                <Product nome={produtos.combos.nome} url={produtos.combos.url} preco={produtos.combos.preco} descricao={produtos.combos.descricao} tolerancia={produtos.combos.tolerancia}/>
            </div>

            <h2 className='db-products-title'>Burgers</h2>
            <div className='db-products'>
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
                <Product nome={produtos.burgers.nome} url={produtos.burgers.url} preco={produtos.burgers.preco} descricao={produtos.burgers.descricao} tolerancia={produtos.burgers.tolerancia} />
            </div>
        </>
    )
}