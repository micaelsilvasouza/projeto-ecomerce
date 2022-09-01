function TrocarPagina(){
    let link = document.getElementById("link")
    let pagameto = document.getElementsByName("pagamento")
    if(pagameto[0].checked){
        link.setAttribute("href","pix.html")
    }else{
        link.setAttribute("href", "compra-finalizada.html")
    }
}
