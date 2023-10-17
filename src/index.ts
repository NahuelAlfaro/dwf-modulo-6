import { Router } from "@vaadin/router"
function main(){
    const butonE = document.querySelector(".botoon")
    butonE?.addEventListener("click",()=>{
        console.log("boton activado")
        Router.go("/users")
    })
}
main()