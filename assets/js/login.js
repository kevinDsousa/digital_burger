addEventListener('submit', (e) => {
    e.preventDefault();
    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value; 
    if(login == "kevindiegodasilvasousa@gmail.com" && senha == "226921") {
        alert("Conectado com o sistema");
    }
});

