let tabela = document.querySelector(".responsive-table")

tabela.addEventListener("click", function(e){
    let par = document.createElement("p");
    par.innerHTML = 'BELA TABELA!';
    par.style.textAlign = "center";
    par.style.fontFamily = "Arial";
    par.style.fontSize = "3em";
    document.body.appendChild(par)
}
)
tabela.style.cursor = "pointer";