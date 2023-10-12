import { Router } from "@vaadin/router"
function main(){
    const butonE = document.querySelector(".botoon")
    butonE?.addEventListener("click",()=>{
        
        Router.go("/users")
    })
}
main()