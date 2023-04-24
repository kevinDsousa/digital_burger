function listarProdutos() {
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = '';
    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    for (let index = 0; index < lista.length; index++) {
        tabela.innerHTML += `<tr>
                                <td>${lista[index].item}</td>
                                <td>${lista[index].icone}</td>
                                <td>${lista[index].preco}</td>
                                <td>${lista[index].descricao}</td>
                                <td>
                                    <button 
                                    class="btn btn-warning
                                    type="button"
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasRightEditar" 
                                    aria-controls="offcanvasRightEditar" 
                                    onclick="preencherForm(${index})"
                                    >Editar</button>
                                    <button class="btn btn-danger" onclick="deletarProdutos(${index})">Deletar</button>
                                </td>
                            </tr>`
    
    }
}

listarProdutos();

function adicionarProdutos() {
    event.preventDefault();

    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    // Criando produto
    let produto = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value,
    }

    // insere o aluno no array
    lista.push(produto);
    localStorage.setItem("lista", JSON.stringify(lista)); // salvando no localstorage
    cadastro.reset(); // limpa os campos do formulário
    let fechar = document.querySelector("#cadastro-fechar");
    fechar.dispatchEvent(new Event("click")); // fechar o modal
    listarProdutos(); // listando os produtos
}

function preencherForm (posicao) {
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    e_nome.value = lista[posicao].nome;
    e_email.value = lista[posicao].email;
    e_telefone.value = lista[posicao].telefone;
    e_cidade.value = lista[posicao].cidade;
}

function editarProdutos(posicao) {
    
}

function delatarProdutos (posicao) {
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    let novaLista = [];

    for (let index = 0; index < lista.length; index++) {
        if (index != posicao) {
            novaLista.push(lista[index]);
        }
        localStorage.setItem("lista", JSON.stringify(novaLista));
        listarProdutos();
    }
}

