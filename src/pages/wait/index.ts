export function wait(routh) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1>Esperando a que nombre presione !jugar!
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

        h1{
            font-family: 'Odibee Sans';
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