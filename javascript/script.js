function TrocarPagina(){
    let link = document.getElementById("link")
    let recebimento = document.getElementsByName("retirada")
    let pagameto = document.getElementsByName("pagamento")
    if(recebimento[1].checked){
        for(let i = 0; i < 4 ; i++){
            let end = document.getElementsByName("end")[i]
            if(end.value.length <= 0){
                return alert("Preencha todo os campos corretante")
            }
        }
        if(pagameto[0].checked){
            link.setAttribute("href","pix.html")
        }else{
            link.setAttribute("href", "compra-finalizada.html")
        }
    }else{
        if(pagameto[0].checked){
        link.setAttribute("href","pix.html")
        }else{
        link.setAttribute("href", "compra-finalizada.html")
        }
    }
}
function AparecerEnder(fator){
    let div = document.getElementById("endereco")
    if(fator){
        div.style.display = "block"
    }else{
        div.style.display = "none"
    }
}