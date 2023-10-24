export function name(routh) {
    const div = document.createElement("div");
    div.innerHTML = `
        <welcome-title></welcome-title>
        <label class="nameLabel" for="name">Nombre</label>
        <input class="name" id="name" type="text">
        <start-button class="sButton" title="Empezar"></start-button>
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

        .nameLabel{
            font-size:40px;
            font-family: 'Odibee Sans';
        }

        .name{
            border: 10px solid #001997;
            border-radius: 10px;
            width: 322px;
            height: 57px;
            font-size: 28px;
            font-family: 'Odibee Sans';
            margin-top:-3vh;
        }

        .container{
            display: flex;
            flex-direction: column;
            gap: 5vh;
            align-items: center;
            height: 98vh;
            padding: 85px 0 0 0;
        }
        `
    function startGame() {
        const startButton = div.querySelector(".sButton");
        startButton?.addEventListener("click", (e) => {
            routh.goTo("/welcome");
        })

    }
    startGame();

    div.appendChild(style);
    return div;
}