import { padDraw } from "./assets/src/screenLooks.mjs";

const screen = document.querySelector('#screen-window');
const inputField = document.querySelector('#input-window');
const ctx = screen.getContext('2d');
export const input = inputField.getContext('2d');
let direction;

if(window.innerHeight < window.innerWidth){direction = 0.5}
else if(window.innerWidth <= window.innerHeight){direction = 2}
if(window.innerWidth >= 1280){direction = 1}

let width = screen.width = window.innerWidth / window.innerHeight * 80 * direction;
let height = screen.height = 80;
export let padWidth = inputField.width = window.innerWidth / window.innerHeight * 100 * direction;
export let padHeight = inputField.height = 100;

export let field = [[
    {x: padWidth/4, y: padHeight/4 * 3, pressed: false},
    {x: padWidth/2, y: padHeight/4 * 3, pressed: false},
    {x: padWidth/4 * 3, y: padHeight/4 * 3, pressed: false}
],[
    {x: padWidth/4, y: padHeight/2, pressed: false},
    {x: padWidth/2, y: padHeight/2, pressed: false},
    {x: padWidth/4 * 3, y: padHeight/2, pressed: false}
],[
    {x: padWidth/4, y: padHeight/4, pressed: false},
    {x: padWidth/2, y: padHeight/4, pressed: false},
    {x: padWidth/4 * 3, y: padHeight/4, pressed: false}
]]

const Game = {
    resize: false,
    layout: 'sidewards',
    split: {x: 50, y: 50},
    touches: []
}

const backgroundImg = new Image()
backgroundImg.src = './assets/img/background.png'
const styleButtonImg = new Image()
styleButtonImg.src = './assets/img/style-menu.png'

function draw(){
    // Background
    ctx.drawImage(backgroundImg, width / 2 - 130, 0);
    input.clearRect(0,0,padWidth, padHeight);

    //GUI
    padDraw();
    input.drawImage(styleButtonImg,0, 0);

    window.requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', (e) => {
    if(window.innerHeight < window.innerWidth){direction = 0.5; Game.layout = 'upwards'}
    else if(window.innerWidth <= window.innerHeight){direction = 2; Game.layout = 'sidewards'}
    if(window.innerWidth >= 1280){direction = 1}

    width = screen.width = window.innerWidth / window.innerHeight * 80 * direction;
    height = screen.height = 80;
    padWidth = inputField.width = window.innerWidth / window.innerHeight * 100 * direction;
    padHeight = inputField.height = 100;

    field = [[
        {x: padWidth/4, y: padHeight/4 * 3, pressed: false},
        {x: padWidth/2, y: padHeight/4 * 3, pressed: false},
        {x: padWidth/4 * 3, y: padHeight/4 * 3, pressed: false}
    ],[
        {x: padWidth/4, y: padHeight/2, pressed: false},
        {x: padWidth/2, y: padHeight/2, pressed: false},
        {x: padWidth/4 * 3, y: padHeight/2, pressed: false}
    ],[
        {x: padWidth/4, y: padHeight/4, pressed: false},
        {x: padWidth/2, y: padHeight/4, pressed: false},
        {x: padWidth/4 * 3, y: padHeight/4, pressed: false}
    ]]
})

function ongoingTouchIndexById(idToFind) {
    for (let i = 0; i < Game.touches.length; i++) {
      const id = Game.touches[i].identifier;
  
      if (id === idToFind) {
        return i;
      }
    }
    return -1; // not found
}

document.addEventListener('touchstart', (e) => {
    let touches = e.changedTouches
    for(i of touches){
        Game.touches.push(touches[i]);
    }

    if(Game.layout = 'sidewards' && touches[0].clientX >= width && touches[0].clientX <= width + 5 && touches[0].clientY <= 5){
        Game.resize = true
    }
})

document.addEventListener('touchmove', (e) => {
    let touches = e.changedTouches
    let idx = ongoingTouchIndexById(touches)
    for(i of Game.touches){
        
    }
    

    if(Game.resize){
        console.log(touches);
    }
})