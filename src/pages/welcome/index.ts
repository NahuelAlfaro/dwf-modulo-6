export function welcome(routh) {
    const div = document.createElement("div");
    div.innerHTML = `
        <welcome-title></welcome-title>
        <start-button class="newRoomButton" title="Nuevo Juego"></start-button>
        <start-button class="roomButton" title="Ingresar a Sala"></start-button>
        <div class="plays">
            <my-rock></my-rock>
            <my-paper></my-paper>
            <my-scissors></my-scissors>
        </div>
        `
    div.classList.add("container");

    const style = document.createElement("style");
    style.textContent = `
        .plays{
            display:flex;
            width: 80%;
            justify-content: space-evenly;
            position: relative;
            top: 10px;
        }
        .container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 98vh;
            padding: 85px 0 0 0;
        }
        `
    function startGame() {
        const newRoomButton = div.querySelector(".newRoomButton");
        newRoomButton?.addEventListener("click", (e) => {
            routh.goTo("/newRoom");
        })
        const eRoomButton = div.querySelector(".roomButton");
        eRoomButton?.addEventListener("click", (e) => {
            routh.goTo("/eRoom");
        })

    }
    startGame();

    div.appendChild(style);
    return div;
}