// This game drew on some of the structures and strategies of
// https://github.com/arshadasgar/arshadasgar.github.io/tree/master/eggs

let target = $('#target'),
    gameBoard = $('#game_board'),
    success = $('#success'),
    restart = $('#restart'),
    targetHeight = target.height(),
    targetWidth = target.width(),
    targetRadius = targetHeight / 2,
    gameOver = false,
    anim_id = 0;

$(gameBoard).mousemove(function(e) {
    if (!gameOver && e.buttons === 0) {
        offset = $(gameBoard).offset();
        mouseX = e.pageX - offset.left;
        mouseY = e.pageY - offset.top;
        // console.log(`Mouse is at: {${mouseX}, ${mouseY}}`);
        targetX = parseInt(target.css('left')) + targetRadius;
        targetY = parseInt(target.css('top')) + targetRadius;
        // console.log(`Target is at: {${targetX}, ${targetY}}`);

        if (check_near_target(mouseX, mouseY, targetX, targetY)) {
            move_target();
        }
    }
});

$(target).click(stop_the_game);

$(restart).click(restart_the_game);

function check_near_target(mx, my, tx, ty) {
    distance = Math.sqrt(Math.pow(mx - tx, 2) + Math.pow(my - ty, 2));
    // console.log(`Distance to target center: ${distance}`);
    // console.log(`Distance to target edge: ${distance - targetRadius}`);
    return distance - targetRadius <= 0;
}

function move_target() {
    newY = Math.floor(Math.random() * (gameBoard.height() - targetHeight));
    newX = Math.floor(Math.random() * (gameBoard.width() - targetWidth));
    // console.log(`New X: ${newX} New Y: ${newY}`);
    target.css('top', newY);
    target.css('left', newX);
}

function stop_the_game() {
    gameOver = true;
    success.css('visibility', 'visible');
}

function restart_the_game() {
    gameOver = false;
    success.css('visibility', 'hidden');
}