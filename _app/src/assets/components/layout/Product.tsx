import './Product.css';
type Props = { nome: string; imagem: string; descricao: string; preco: number; tolerancia: Array<string> }

export default function Product(props: Props) {
    return (
        <>
            <div className="db-product">
                <div className='db-product-container'>
                    <img src={props.imagem} alt={props.nome} />
                    <div>
                        <ul>
                            <li><img src={props.tolerancia[0]}></img></li>
                            <li><img src={props.tolerancia[1]}></img></li>
                            <li><img src={props.tolerancia[2]}></img></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>{props.nome}</h2>
                    <p>{props.descricao}</p>
                    <span>R${props.preco}</span>
                </div>
            </div>
        </>
    )
}