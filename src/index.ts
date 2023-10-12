import { Router } from "@vaadin/vaadin"
function main(){
    const butonE = document.querySelector(".botoon")
    butonE?.addEventListener("click",()=>{
        
        Router.go("/users")
    })
}
main()