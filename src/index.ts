function main(){
    const butonE = document.querySelector(".botoon")
    butonE?.addEventListener("click",()=>{
        console.log("cambie")
        history.pushState({},"","/hola")
    })
}
main()