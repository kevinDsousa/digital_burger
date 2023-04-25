let btnAbrir = document.querySelector(".abrir-lateral");
btnAbrir.onclick = function(){
    lateral.classList.add("active");
}

let btnFechar = document.querySelector(".fechar-lateral");
btnFechar.onclick = function(){
    lateral.classList.remove("active");
}



let tabela = $("#tabela");

function listarCategorias()
{
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then(res => res.json())
    .then(lista => {
        lista.forEach(cat => {
            categoria.innerHTML += `<option>${cat.categoria}</option>`;
        });
    })
} listarCategorias();

function listarProdutos()
{
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos')
    .then(res => res.json())
    .then(lista => {
        tabela.DataTable({
            data: lista,
            columns: [
                { data: 'id', width: '50px' },
                { data: 'produto' },
                { data: 'preco' , width: '100px' },
                { data: 'categoria', width: '150px' },
                { data: 'status', 
                    width: '100px',
                    className: 'dt-head-center dt-body-center',
                    render: function(data, type, row){
                        return data == 1 ? 'Ativo' : 'Inativo';
                    }
                },
                { data: '', 
                    width: '100px',
                    className: 'dt-head-center dt-body-center',
                    render: function(data, type, row){
                        return `<ion-icon class="btn" name="create"></ion-icon>
                                <ion-icon class="btn" onClick="deletarCategoria(${row.id})" name="trash"></ion-icon>`;
                    }
                }
            ],
            responsive: true
        })
    })
} listarProdutos();

function addProduto()
{
    event.preventDefault();
    let dados = {
        produto: produto.value,
        descricao: descricao.value,
        imagem: imagem.value,
        categoria: categoria.value,
        status: 1
    }

    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => {
        window.location.reload();
    })
}

function deletarProduto(idCategoria)
{
    fetch(`https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias/${idCategoria}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        window.location.reload();
    })
}