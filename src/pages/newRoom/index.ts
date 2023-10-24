export function newRoom(routh) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1>Comparti el codigo:</h1>
        <h3>Codigo</h3>
        <h2>Con tu contrincante</h2>
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

        h1, h2, h3{
            font-family: 'Odibee Sans';
        }
        h1{
            font-size: 55px
        }
        h3{
            font-size: 68px
        }
        h2{
            font-size: 45px
        }

        .container{
            display: flex;
            flex-direction: column;
            gap: 5vh;
            align-items: center;
            height: 98vh;
            padding: 60px 0 0 0;
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