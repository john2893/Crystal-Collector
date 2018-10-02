
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
    
    function logic (){
        if ((game.score) === (game.ranNum) ){
            $("#wins").text("You Won!!");
            game.wins++
            $("#winsNum").text(game.wins);
            stop();
        
        } else if (parseInt(game.score) > parseInt(game.ranNum)) {
            $("#loss").text("You Lost");
            game.losses ++;
            $("#lossNum").text(game.losses);
            stop();
            
        }
    };

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
    function stop(){
        $("#gem1").off("click");
        $("#gem2").off("click");
        $("#gem3").off("click");
        $("#gem4").off("click");


        
    };
};
start();

function reset(){
    start()

};


$(".reset").on("click", function(){
    reset();
    start();
});

