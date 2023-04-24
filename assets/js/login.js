addEventListener('submit', (e) => {
    e.preventDefault();
    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value; 
    if(login == "digitalburger@gmail.com" && senha == "digital123") {
        alert("Conectado com o sistema");
        window.location.href = "https://kevindik.github.io/digital_burger/cad-produtos";
    }
});