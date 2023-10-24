import { play } from "./pages/play";
import { rules } from "./pages/rules";
import { win } from "./pages/win";
import { lose } from "./pages/lose";
import { tie } from "./pages/tie";
import { welcome } from "./pages/welcome";
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
}]

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
        goTo("/welcome")
    }else{
        handleRoute(location.pathname)
    }
}