'use strict';

let levelSize
let level = 1
let deaths = 0

// Timer level

// .drawLine()

function gameInit() {
    // called once after the engine starts up
    // setup the game
}

function gameUpdate() {
    // called every frame at 60 frames per second
    // handle input and update the game state
}

function gameUpdatePost() {
    // called after physics and objects are updated
    // setup camera and prepare for render
}

function gameRender() {
    // called before objects are rendered
    // draw any background effects that appear behind objects
}

function gameRenderPost() {
    // called after objects are rendered
    // draw effects or hud that appear above all objects
    // draw to overlay canvas for hud rendering
    const drawText = (text, x, y, size=50) =>
    {
        overlayContext.textAlign = 'center';
        overlayContext.textBaseline = 'top';
        // overlayContext.font = size + 'px arial';
        overlayContext.font = size + 'px courier';
        overlayContext.fillStyle = '#fff';
        overlayContext.lineWidth = 2;
        overlayContext.strokeText(text, x, y);
        overlayContext.fillText(text, x, y);
    }
    drawText('Level ' + level,   overlayCanvas.width*1/4, 20);
    drawText('Deaths: ' + deaths, overlayCanvas.width*3/4, 20);
    drawText('Death and Mouse',overlayCanvas.width*1/2,5,30)
}

// startup LittleJS with your game functions after the tile image is loaded
engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost, 'tiles.png');
