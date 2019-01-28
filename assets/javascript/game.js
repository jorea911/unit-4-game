// Loads HTML first
$(document).ready(function () {

    //gloabal variables
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var wins = 0;
    var losses = 0;
    targetNum = null;
    var currentNum = 0;

    newGame();

    function newGame() {

        $(".goalBox").empty();
        numberGenerator();
        currentNum = 0;
        CrystalGenerator();
        $(".scoreBox").empty();
        $(".scoreBox").append(currentNum);

    };


    function numberGenerator() {

        targetNum = Math.floor(Math.random() * 101) + 19;
        $(".goalBox").append(targetNum);
        console.log("running", targetNum);
    };


    function CrystalGenerator() {
        num1 = Math.floor(Math.random() * 11) + 1;
        num2 = Math.floor(Math.random() * 11) + 1;
        num3 = Math.floor(Math.random() * 11) + 1;
        num4 = Math.floor(Math.random() * 11) + 1;

    };


    $(".cr1").on("click", function () {
        console.log("cr1 clicked");
        currentNum += num1;
        $(".scoreBox").empty();
        $(".scoreBox").append(currentNum);
        checkAnswer();
    });

    $(".cr2").on("click", function () {
        currentNum += num2;
        $(".scoreBox").empty();
        $(".scoreBox").append(currentNum);
        checkAnswer();
    });

    $(".cr3").on("click", function () {
        currentNum += num3;
        $(".scoreBox").empty();
        $(".scoreBox").append(currentNum);
        checkAnswer();
    });

    $(".cr4").on("click", function () {
        currentNum += num4;
        $(".scoreBox").empty();
        $(".scoreBox").append(currentNum);
        checkAnswer();

    });


function checkAnswer() {
    if (currentNum === targetNum) {
        wins++
        $(".winsBox").empty();
        $(".winsBox").append("Wins: " + wins);
        newGame();
    }

    else if (currentNum > targetNum) {
        losses++
        $(".lossesBox").empty();
        $(".lossesBox").append("Losses: " + losses);
        newGame();
    }

};



});