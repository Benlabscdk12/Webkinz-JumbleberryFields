const ScoredDone = [false, false, false,
                    false, false, false,
                    false, false, false];
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}
function scoreFree(){
    const rollIn = currentRoll();
    var scoreOut = 0;
    for (i = 0; i < rollIn.length; i++) {
        switch (rollIn[i]) {
            case 1:
            case 2:
                scoreOut+=2;
                break;
            case 3:
                scoreOut+=4;
                break;
            case 4:
                scoreOut+=7;
            default:
                scoreOut+=0;
        }
    }
    return scoreOut;
}
function scoreJumb() {
    const rollIn = currentRoll();
    var scoreOut = 0;
    for (i = 0; i < rollIn.length; i++) {
        if (rollIn[i] == 1) {
            scoreOut += 2;
        }
    }
    return scoreOut;
}
function scoreSugar() {
    const rollIn = currentRoll();
    var scoreOut = 0;
    for (i = 0; i < rollIn.length; i++) {
        if (rollIn[i] == 2) {
            scoreOut += 2;
        }
    }
    return scoreOut;
}
function scorePickle() {
    const rollIn = currentRoll();
    var scoreOut = 0;
    for (i = 0; i < rollIn.length; i++) {
        if (rollIn[i] == 3) {
            scoreOut += 4;
        }
    }
    return scoreOut;
}
function scoreMoon() {
    const rollIn = currentRoll();
    var scoreOut = 0;
    for (i = 0; i < rollIn.length; i++) {
        if (rollIn[i] == 4) {
            scoreOut += 7;
        }
    }
    return scoreOut;
}
function scoreThree(){
    const rollIn = currentRoll();
    var rollCopy = [...rollIn];
    var most = mode(rollCopy);
    let count = 0;
    rollIn.forEach(element => {
        if (element === most) {
          count += 1;
        }
    });
    if(count>=3){
        return scoreFree();
    }else{
        return 0;
    }
}
function scoreFour(){
    const rollIn = currentRoll();
    var rollCopy = [...rollIn];
    var most = mode(rollCopy);
    let count = 0;
    rollIn.forEach(element => {
        if (element === most) {
          count += 1;
        }
    });
    if(count>=4){
        return scoreFree();
    }else{
        return 0;
    }
}
function scoreFive(){
    const rollIn = currentRoll();
    var rollCopy = [...rollIn];
    var most = mode(rollCopy);
    let count = 0;
    rollIn.forEach(element => {
        if (element === most) {
          count += 1;
        }
    });
    if(count>=5){
        return scoreFree();
    }else{
        return 0;
    }
}
function scoreMixed(){
    const rollIn = currentRoll();
    var mixedCheck = [false, false, false, false];
    var flyCount = 0;
    var lose = false;
    rollIn.forEach(element => {
        if (element < 5) {
          mixedCheck[element - 1] = true;
        }else{
            flyCount+=1;
            if(flyCount >= 2){
                return 0;
            }
        }
    });
    mixedCheck.forEach(element => {
        if (!element) {
            lose = true;
        }
    });
    if(lose){
        return 0;
    }else{
        return scoreFree();
    }
}
function hide() {
    if(!ScoredDone[0]){document.getElementById("jumbCell").innerHTML = " ";}
    if(!ScoredDone[1]){document.getElementById("moonCell").innerHTML = " ";}
    if(!ScoredDone[2]){document.getElementById("fiveCell").innerHTML = " ";}
    if(!ScoredDone[3]){document.getElementById("sugarCell").innerHTML = " ";}
    if(!ScoredDone[4]){document.getElementById("threeCell").innerHTML = " "; }
    if(!ScoredDone[5]){document.getElementById("mixedCell").innerHTML = " ";}
    if(!ScoredDone[6]){document.getElementById("pickleCell").innerHTML = " ";}
    if(!ScoredDone[7]){document.getElementById("fourCell").innerHTML = " ";}
    if(!ScoredDone[8]){document.getElementById("freeCell").innerHTML = " ";}
}
