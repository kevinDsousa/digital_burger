import Product from './Product';
import './Products.css'

//Burgers
import phpBurger from '../../../images/Produtos/Burgers/PhpBurger.jpg'
import CplusBurger from '../../../images/Produtos/Burgers/CplusBurger.jpg'
import GitMac from '../../../images/Produtos/Burgers/GitMac.jpg'
import JavaBurger from '../../../images/Produtos/Burgers/JavaBurger.jpg'
import PhpBurger from '../../../images/Produtos/Burgers/PhpBurger.jpg'
import PythonBurger from '../../../images/Produtos/Burgers/PythonBurger.jpg'
import ReactBurger from '../../../images/Produtos/Burgers/ReactBurger.jpg'

export default function Products() {

    const burguers = [
        {
            "nome": "PHP Burger",
            "url": phpBurger,
            "preco": 20.99,
            "descricao": "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.",
            "tolerancia": ["", "", ""],
        },
        {
            "nome": "CplusBurger",
            "url": CplusBurger,
            "preco": 24.99,
            "descricao": "Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.",
            "tolerancia": ["", "", ""]
        },
        {
            "nome": "GitMac",
            "url": phpBurger,
            "preco": 20.99,
            "descricao": "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.",
            "tolerancia": ["", "", ""]
        },
        {
            "nome": "Java Burger",
            "url": JavaBurger,
            "preco": 32.99,
            "descricao": "São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.",
            "tolerancia": ["", "", ""]
        },
    ]

    return (
        <>
            <h2 className='db-products-title'>Combos</h2>
            <div className='db-products'>
                {}
            </div>

            <h2 className='db-products-title'>Burgers</h2>
            <div className='db-products'>
                {burguers.map(() => <Product nome={GitMac} url={GitMac} descricao={GitMac} preco={GitMac} tolerancia={[]}/>)}
            </div>
        </>
    )
}