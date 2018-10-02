
// Initializing all the variables. Setting their values. Some to '0', 'clearing values, and some to their respective
// random numer.
function start(){

    var gem1 = Math.floor(Math.random() * 5) + 1;
    var gem2 = Math.floor(Math.random() * 8) + 1;
    var gem3 = Math.floor(Math.random() * 10) + 1;
    var gem4 = Math.floor(Math.random() * 2) + 0;
    var tots = $("#totScore");
    var game = {
        gem1:(Math.floor(Math.random() * 5) + 1),
        gem2:(Math.floor(Math.random() * 4) + 0),
        gem3:(Math.floor(Math.random() * 10) + 1),
        gem4:(Math.floor(Math.random() * 5) + 1),
        score:0,
        ranNum:(Math.floor(Math.random() * 100) + 20),
        wins:0,
        losses:0
    };


    $("#ranNum").text(game.ranNum);
    tots.text("0");
    $("#wins").text(" ");
    $("#lossNum").text(" ");
    $("#winsNum").text(" ");
    $("#loss").text(" ");
    
    // Conditoins: if the score is equal to the random number then you win.
    //stop all clicks.
    function logic (){
        if ((game.score) === (game.ranNum) ){
            $("#wins").text("You Won!!");
            game.wins++
            $("#winsNum").text(game.wins);
            stop();
    // Conditions: If the score is greater than the random number then you loose.
    // stop all clicks after this.
        } else if (parseInt(game.score) > parseInt(game.ranNum)) {
            $("#loss").text("You Lost");
            game.losses ++;
            $("#lossNum").text(game.losses);
            stop();
            
        }
    };
    // Functions to perform on every click on the image.
    $("#gem1").on("click", function(){
        game.score = parseInt(game.score) + game.gem1
        tots.text(game.score);
        logic();
    });
    $("#gem2").on("click", function(){
        game.score = parseInt(game.score) + game.gem2
        tots.text(game.score);
        logic();
    });
    $("#gem3").on("click", function(){
        game.score = parseInt(game.score) + game.gem3
        tots.text(game.score);
        logic();
    });
    $("#gem4").on("click", function(){
        game.score = parseInt(game.score) + game.gem4
        tots.text(game.score);
        logic();
    });
    // Turning off the clicks on all the gems. Used after a Win or a Loss. 
    function stop(){
        $("#gem1").off("click");
        $("#gem2").off("click");
        $("#gem3").off("click");
        $("#gem4").off("click");


        
    };
};
start();

// Function to reset the game.
function reset(){
    start()

};

// Function to perform after clicking the reset button.

$(".reset").on("click", function(){
    reset();
    start();
});

