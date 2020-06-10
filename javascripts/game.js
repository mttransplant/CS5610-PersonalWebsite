// This game drew on some of the structures and strategies of
// https://github.com/arshadasgar/arshadasgar.github.io/tree/master/eggs

let target = $('#target'),
    gameBoard = $('#game_board'),
    targetHeight = target.height(),
    targetWidth = target.width(),
    the_game = 0,
    anim_id = 0;

$(function() {
    the_game = function() {

        if (check_near_target()) {
            move_target();
        }

        if (check_caught_target()) {
            stop_the_game();
            console.log("You won!! Congrats!!")
        } else {
            anim_id = requestAnimationFrame(the_game);
        }
    };

    anim_id = requestAnimationFrame(the_game);
});

$("#stop").click(stop_the_game);

function check_near_target() {
    myStatus = Math.floor(Math.random() * 10) === 0;
    console.log(myStatus);
    return myStatus;
}

function check_caught_target() {
    return false;
}

function move_target() {
    newY = Math.floor(Math.random() * (gameBoard.height() - targetHeight));
    newX = Math.floor(Math.random() * (gameBoard.width() - targetWidth));
    console.log(`New X: ${newX} New Y: ${newY}`);
    target.css('top', newY);
    target.css('left', newX);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    target.css('background-color', 'red');
}