const game = new Game();

// const post = new Posts();

function setup() {
    game.setup();
}
function preload() {
    ballImage = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/SoccerBallsmall.png'
    );
    playerHome = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/playerHome.png'
    );
    playerAway = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/gameA/master/Assets/playerAway.png'
    );
}
function draw() {
    game.draw();
}
