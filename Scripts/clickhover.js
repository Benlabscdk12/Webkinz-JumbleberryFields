function jumbHover(){
    if(!ScoredDone[0]){
        document.getElementById("jumbCell").innerHTML = scoreJumb();
    }
}
function jumbClick(){
    if(!ScoredDone[0]){
        document.getElementById("jumbCell").innerHTML = scoreJumb();
        ScoredDone[0] = true;
        resetRoll();
    }
}
function sugarHover(){
    if(!ScoredDone[3]){
        document.getElementById("sugarCell").innerHTML = scoreSugar();
    }
}
function sugarClick(){
    if(!ScoredDone[3]){
        document.getElementById("sugarCell").innerHTML = scoreSugar();
        ScoredDone[3] = true;
        resetRoll();
    }
}
function pickleHover(){
    if(!ScoredDone[6]){
        document.getElementById("pickleCell").innerHTML = scorePickle();
    }
}
function pickleClick(){
    if(!ScoredDone[6]){
        document.getElementById("pickleCell").innerHTML = scorePickle();
        ScoredDone[6] = true;
        resetRoll();
    }
}
function moonHover(){
    if(!ScoredDone[1]){
        document.getElementById("moonCell").innerHTML = scoreMoon();
    }
}
function moonClick(){
    if(!ScoredDone[1]){
        document.getElementById("moonCell").innerHTML = scoreMoon();
        ScoredDone[1] = true;
        resetRoll();
    }
}
function freeHover(){
    if(!ScoredDone[8]){
        document.getElementById("freeCell").innerHTML = scoreFree();
    }
}
function freeClick(){
    if(!ScoredDone[8]){
        document.getElementById("freeCell").innerHTML = scoreFree();
        ScoredDone[8] = true;
        resetRoll();
    }
}
function threeHover(){
    if(!ScoredDone[4]){
        document.getElementById("threeCell").innerHTML = scoreThree();

    }
}
function threeClick(){
    if(!ScoredDone[4]){
        document.getElementById("threeCell").innerHTML = scoreThree();
        ScoredDone[4] = true;
        resetRoll();
    }
}
function fourHover(){
    if(!ScoredDone[7]){
        document.getElementById("fourCell").innerHTML = scoreFour();
    }
}
function fourClick(){
    if(!ScoredDone[7]){
        document.getElementById("fourCell").innerHTML = scoreFour();
        ScoredDone[7] = true;
        resetRoll();
    }
}
function fiveHover(){
    if(!ScoredDone[2]){
        document.getElementById("fiveCell").innerHTML = scoreFive();
    }
}
function fiveClick(){
    if(!ScoredDone[2]){
        document.getElementById("fiveCell").innerHTML = scoreFive();
        ScoredDone[2] = true;
        resetRoll();
    }
}
function mixedHover(){
    if(!ScoredDone[5]){
        document.getElementById("mixedCell").innerHTML = scoreMixed();
    }
}
function mixedClick(){
    if(!ScoredDone[5]){
        document.getElementById("mixedCell").innerHTML = scoreMixed();
        ScoredDone[5] = true;
        resetRoll();
    }
}