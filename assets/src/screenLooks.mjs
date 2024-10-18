import { input, padHeight, padWidth, field } from "../../game.js";

export function padDraw(){
    input.fillStyle = 'gray';
    input.fillRect(0,0,padWidth, padHeight)

    for(let n of field){
        input.beginPath();
        for(let i of n){
            if(i.pressed){input.fillStyle = 'red';}
            else{input.fillStyle = 'black'}
            input.arc(i.x, i.y, padHeight / 50, 0, Math.PI * 2);
        }
        input.fill();
    }
}