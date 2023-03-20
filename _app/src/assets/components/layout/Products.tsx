import Product from './Product';
import './Products.css'

//Combos
import dropDataBase from '../../../images/Produtos/Combos/dropDataBase.jpg'
import fullStack from '../../../images/Produtos/Combos/fullStack.jpg'
import plenoDev from '../../../images/Produtos/Combos/plenoDev.jpg'
import scrumDev from '../../../images/Produtos/Combos/scrumDev.jpg'
import juniorDev from '../../../images/Produtos/Combos/juniorDev.jpg'
import seniorDev from '../../../images/Produtos/Combos/seniorDev.jpg'

//Entradas
import BatataFrita from '../../../images/Produtos/Entradas/BatataFrita.jpg'
import BatataFritaCheddarBacon from '../../../images/Produtos/Entradas/BatataFritaCheddarBacon.jpg'
import BatataFritaCostela from '../../../images/Produtos/Entradas/BatataFritaCostela.jpg'
import BolinhaQueijo from '../../../images/Produtos/Entradas/BolinhaQueijo.jpg'
import NuggetsFrango from '../../../images/Produtos/Entradas/NuggetsFrango.jpg'
import OnionRings from '../../../images/Produtos/Entradas/OnionRings.jpg'

//Burgers
import phpBurger from '../../../images/Produtos/Burgers/PhpBurger.jpg'
import CplusBurger from '../../../images/Produtos/Burgers/CplusBurger.jpg'
import JavaBurger from '../../../images/Produtos/Burgers/JavaBurger.jpg'
import PhpBurger from '../../../images/Produtos/Burgers/PhpBurger.jpg'
import PythonBurger from '../../../images/Produtos/Burgers/PythonBurger.jpg'
import ReactBurger from '../../../images/Produtos/Burgers/ReactBurger.jpg'

//Bebidas
import AguaGas from '../../../images/Produtos/Bebidas/AguaGas.jpg'
import AguaSGas from '../../../images/Produtos/Bebidas/AguaSGas.jpg'
import Caipirinha from '../../../images/Produtos/Bebidas/Caipirinha.jpg'
import CanecaChop from '../../../images/Produtos/Bebidas/CanecaChop.jpg'
import CubaLibre from '../../../images/Produtos/Bebidas/CubaLibre.jpg'
import Heineken from '../../../images/Produtos/Bebidas/Heineken.jpg'
import Refrigerante from '../../../images/Produtos/Bebidas/Refrigerante.jpg'
import SexOnTheBeach from '../../../images/Produtos/Bebidas/SexOnTheBeach.jpg'
import SucosVariados from '../../../images/Produtos/Bebidas/SexOnTheBeach.jpg'
import vinho from '../../../images/Produtos/Bebidas/vinho.jpg'

export default function Products() {

    const combos = [
        {
            nome: "Combo drop database",
            imagem: dropDataBase,
            preco: 34.99,
            descricao: "Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa. Acompanha fritas temperadas e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Combo FullStack",
            imagem: fullStack,
            preco: 32.99,
            descricao: "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial. Acompanha anéis de cebola e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Combo Pleno Developer",
            imagem: plenoDev,
            preco: 29.99,
            descricao: "Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Combo Junior Developer",
            imagem: juniorDev,
            preco: 32.99,
            descricao: "Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Combo Senior Developer",
            imagem: seniorDev,
            preco: 42.99,
            descricao: "São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche. Acompanha fritas temperadas e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Combo Scrum Master",
            imagem: scrumDev,
            preco: 39.99,
            descricao: "Pão australiano tostado na manteiga, duas carnes de 100g da casa, dois bacons, duas fatias de queijo cheddar, alface, tomate, molho de ervas e barbecue. Acompanha fritas temperadas e uma bebida a sua escolha.",
            tolerancia: ["", "", ""]
        }
    ]

    const burguers = [
        {
            nome: "PHP Burger",
            imagem: phpBurger,
            preco: 20.99,
            descricao: "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.",
            tolerancia: ["", "", ""],
        },
        {
            nome: "C++ Burger",
            imagem: CplusBurger,
            preco: 24.99,
            descricao: "Pão brioche, duas carnes de 100g, duas fatias de queijo cheddar, quatro anéis de cebola e nosso maravilhoso molho da casa.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "PhpBurger",
            imagem: PhpBurger,
            preco: 20.99,
            descricao: "Pão de beterraba, burger suíno de 150g, bacon, queijo muçarela, maçã caramelizada, alface e maionese especial.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Java Burger",
            imagem: JavaBurger,
            preco: 32.99,
            descricao: "São 3 hambúrgueres de Angus 120 g, 3 fatias de cheddar, 3 fatias de bacon, maionese temperada da casa, alface e tomate no pão brioche.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Python Burger",
            imagem: PythonBurger,
            preco: 22.99,
            descricao: "Feito com queijo muçarela, carne de 160 g da casa, cebola roxa caramelizada e maionese de bacon artesanal no pão brioche.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "React Burger",
            imagem: ReactBurger,
            preco: 21.99,
            descricao: "Feito com queijo muçarela de búfala, carne de 160 g da casa, tomate seco artesanal, molho de pesto e rúcula no pão brioche.",
            tolerancia: ["", "", ""]
        }
    ]

    const entradas = [
        {
            nome: "Batata frita",
            imagem: BatataFrita,
            preco: 19.99,
            descricao: "Deliciosa porção de fritas.",
            tolerancia: ["", "", ""],
        },
        {
            nome: "Batata frita com cheddar e bacon",
            imagem: BatataFritaCheddarBacon,
            preco: 27.99,
            descricao: "Nossa incrível batata com cheddar e bacon.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Batata frita com costela",
            imagem: BatataFritaCostela,
            preco: 29.99,
            descricao: "Nossa batata frita 300g com nosso delicioso creme cheese e costela desfila com barbecue.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Bolinha de queijo",
            imagem: BolinhaQueijo,
            preco: 24.99,
            descricao: "Porção de 12 bolinhas de queijo fritas na hora.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Nuggets de frango",
            imagem: NuggetsFrango,
            preco: 19.99,
            descricao: "Porção de 12 Nuggets fritos na hora.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Onion rings",
            imagem: OnionRings,
            preco: 19.99,
            descricao: "Anéis de cebolas empanadas.",
            tolerancia: ["", "", ""]
        }
    ]

    const bebidas = [
        {
            nome: "Água com Gas",
            imagem: AguaGas,
            preco: 19.99,
            descricao: "Deliciosa porção de fritas.",
            tolerancia: ["", "", ""],
        },
        {
            nome: "Batata frita com cheddar e bacon",
            imagem: BatataFritaCheddarBacon,
            preco: 27.99,
            descricao: "Nossa incrível batata com cheddar e bacon.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Batata frita com costela",
            imagem: BatataFritaCostela,
            preco: 29.99,
            descricao: "Nossa batata frita 300g com nosso delicioso creme cheese e costela desfila com barbecue.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Bolinha de queijo",
            imagem: BolinhaQueijo,
            preco: 24.99,
            descricao: "Porção de 12 bolinhas de queijo fritas na hora.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Nuggets de frango",
            imagem: NuggetsFrango,
            preco: 19.99,
            descricao: "Porção de 12 Nuggets fritos na hora.",
            tolerancia: ["", "", ""]
        },
        {
            nome: "Onion rings",
            imagem: OnionRings,
            preco: 19.99,
            descricao: "Anéis de cebolas empanadas.",
            tolerancia: ["", "", ""]
        }
    ]

    return (
        <>
            <h2 className='db-products-title'>Combos</h2>
            <div className='db-products'>
                {combos.map((item) => <Product nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} tolerancia={item.tolerancia}/>)}
            </div>

            <h2 className='db-products-title'>Entradas</h2>
            <div className='db-products'>
                {entradas.map((item) => <Product nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} tolerancia={item.tolerancia}/>)}
            </div>

            <h2 className='db-products-title'>Burgers</h2>
            <div className='db-products'>
                {burguers.map((item) => <Product nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} tolerancia={item.tolerancia}/>)}
            </div>

            <h2 className='db-products-title'>Bebidas</h2>
            <div className='db-products'>
                {burguers.map((item) => <Product nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} tolerancia={item.tolerancia}/>)}
            </div>
        </>
    )
}