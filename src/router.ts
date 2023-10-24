import { play } from "./pages/play";
import { rules } from "./pages/rules";
import { win } from "./pages/win";
import { lose } from "./pages/lose";
import { tie } from "./pages/tie";
import { welcome } from "./pages/welcome";
import { name } from "./pages/name";
import { eRoom } from "./pages/eRoom";
import { newRoom } from "./pages/newRoom";
import { wait } from "./pages/wait";
import { state } from "./state";

const BASE_PATH = "localhost";

const routes = [{
    path: /\/welcome/,
    component: welcome
},
{
    path: /\/rules/,
    component: rules
},
{
    path: /\/play/,
    component: play
},
{
    path: /\/win/,
    component: win
},
{
    path: /\/lose/,
    component: lose
},
{
    path: /\/tie/,
    component: tie
},
{
    path: /\/name/,
    component: name
},
{
    path: /\/eRoom/,
    component: eRoom
},
{
    path: /\/newRoom/,
    component: newRoom
},
{
    path: /\/wait/,
    component: wait
},
]

export function initRouter(container:Element){
    function goTo(path){
        history.pushState({},"",path);
        handleRoute(path);
    }
    function handleRoute(route){
        console.log("el route se recibio",route);

        for (const r of routes){
            if(r.path.test(route)){
                const el = r.component({goTo:goTo});

                if(container.firstChild){
                    container.firstChild.remove()
                }
                container.appendChild(el)
            }
        }
    }
    if(location.pathname == "/"){
        goTo("/name")
    }else{
        handleRoute(location.pathname)
    }
}