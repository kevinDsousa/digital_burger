import './Categories.css'

export default function Categories() {
    return (
        <div className='db-categories'>
            <div>
                <a id="menu" href="#combos"><img src="https://www.linkpicture.com/q/combo-icon.png" alt="combos"/></a>
            </div>
            <div>
                <a href="#entradas"><img src="https://www.linkpicture.com/q/entradas-icon.png" alt="entradas"/></a>
            </div>
            <div>
                <a href="#burgers"><img src="https://www.linkpicture.com/q/burguer-icon-removebg-preview.png" alt="burgers"/></a>
            </div>
            <div>
                <a href="#bebidas"><img src="https://www.linkpicture.com/q/bebidas-icon.png" alt="bebidas"/></a>
            </div>
            <div>
                <a href="#sobremesas"><img src="https://www.linkpicture.com/q/sobremesas-icon.png" alt="sobremesas"/></a>
            </div>
        </div>
    )
}