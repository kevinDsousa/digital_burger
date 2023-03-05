addEventListener('submit', (e) => {
    e.preventDefault();
    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value; 
    if(login == "digitalburger@gmail.com" && senha == "digital123") {
        alert("Conectado com o sistema");
        window.location.href = "http://127.0.0.1:5500/cad-produtos.html";
    }
});

