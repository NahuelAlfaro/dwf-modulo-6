function main(){
    const butonE = document.querySelector(".botoon")
    butonE?.addEventListener("click",()=>{
        history.pushState({},"","/hola")
    })
}
main()