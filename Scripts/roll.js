const unlocked = [true, true, true, true, true];
const roll = [0, 0, 0, 0, 0];
rollCount = 3;

function lock(numb) {
    if(rollCount==3){
        return;
    }
    if(rollCount==0){
        return;
    }
    if (unlocked[numb]) {
        unlocked[numb] = false;
        switch(numb){
            case 0:
                document.getElementById("lockA").innerHTML = String.fromCodePoint(0x1F512);
                break;
            case 1:
                document.getElementById("lockB").innerHTML = String.fromCodePoint(0x1F512);
                break;
            case 2:
                document.getElementById("lockC").innerHTML = String.fromCodePoint(0x1F512);
                break;
            case 3:
                document.getElementById("lockD").innerHTML = String.fromCodePoint(0x1F512);
                break;
            case 4:
                document.getElementById("lockE").innerHTML = String.fromCodePoint(0x1F512);
                break;
        }
    } else {
        unlocked[numb] = true;
        switch(numb){
            case 0:
                document.getElementById("lockA").innerHTML = String.fromCodePoint(0x1F513);
                break;
            case 1:
                document.getElementById("lockB").innerHTML = String.fromCodePoint(0x1F513);
                break;
            case 2:
                document.getElementById("lockC").innerHTML = String.fromCodePoint(0x1F513);
                break;
            case 3:
                document.getElementById("lockD").innerHTML = String.fromCodePoint(0x1F513);
                break;
            case 4:
                document.getElementById("lockE").innerHTML = String.fromCodePoint(0x1F513);
                break;
        }
    }
}

function showRandomNumber() {
    if (rollCount == 0) {
        return;
    }
    if (unlocked[0]) {
        switch (rando(1, 10)) {
            case 1:
            case 2:
            case 3:
                roll[0] = 1;
                document.getElementById("myNumberA").src = "Berries/Jumbleberry.png";
                break;
            case 4:
            case 5:
            case 6:
                roll[0] = 2;
                document.getElementById("myNumberA").src = "Berries/Sugarberry.png";
                break;
            case 7:
            case 8:
                roll[0] = 3;
                document.getElementById("myNumberA").src = "Berries/Pickleberry.png";
                break;
            case 9:
                roll[0] = 4;
                document.getElementById("myNumberA").src = "Berries/Moonberry.png";
                break;
            default:
                roll[0] = 5;
                document.getElementById("myNumberA").src = "Berries/Fly.png";
                break;
        }
    }
    if (unlocked[1]) {
        switch (rando(1, 10)) {
            case 1:
            case 2:
            case 3:
                roll[1] = 1;
                document.getElementById("myNumberB").src = "Berries/Jumbleberry.png";
                break;
            case 4:
            case 5:
            case 6:
                roll[1] = 2;
                document.getElementById("myNumberB").src = "Berries/Sugarberry.png";
                break;
            case 7:
            case 8:
                roll[1] = 3;
                document.getElementById("myNumberB").src = "Berries/Pickleberry.png";
                break;
            case 9:
                roll[1] = 4;
                document.getElementById("myNumberB").src = "Berries/Moonberry.png";
                break;
            default:
                roll[1] = 5;
                document.getElementById("myNumberB").src = "Berries/Fly.png";
                break;
        }
    }
    if (unlocked[2]) {
        switch (rando(1, 10)) {
            case 1:
            case 2:
            case 3:
                roll[2] = 1;
                document.getElementById("myNumberC").src = "Berries/Jumbleberry.png";
                break;
            case 4:
            case 5:
            case 6:
                roll[2] = 2;
                document.getElementById("myNumberC").src = "Berries/Sugarberry.png";
                break;
            case 7:
            case 8:
                roll[2] = 3;
                document.getElementById("myNumberC").src = "Berries/Pickleberry.png";
                break;
            case 9:
                roll[2] = 4;
                document.getElementById("myNumberC").src = "Berries/Moonberry.png";
                break;
            default:
                roll[2] = 5;
                document.getElementById("myNumberC").src = "Berries/Fly.png";
                break;
        }
    }
    if (unlocked[3]) {
        switch (rando(1, 10)) {
            case 1:
            case 2:
            case 3:
                roll[3] = 1;
                document.getElementById("myNumberD").src = "Berries/Jumbleberry.png";
                break;
            case 4:
            case 5:
            case 6:
                roll[3] = 2;
                document.getElementById("myNumberD").src = "Berries/Sugarberry.png";
                break;
            case 7:
            case 8:
                roll[3] = 3;
                document.getElementById("myNumberD").src = "Berries/Pickleberry.png";
                break;
            case 9:
                roll[3] = 4;
                document.getElementById("myNumberD").src = "Berries/Moonberry.png";
                break;
            default:
                roll[3] = 5;
                document.getElementById("myNumberD").src = "Berries/Fly.png";
                break;
        }
    }
    if (unlocked[4]) {
        switch (rando(1, 10)) {
            case 1:
            case 2:
            case 3:
                roll[4] = 1;
                document.getElementById("myNumberE").src = "Berries/Jumbleberry.png";
                break;
            case 4:
            case 5:
            case 6:
                roll[4] = 2;
                document.getElementById("myNumberE").src = "Berries/Sugarberry.png";
                break;
            case 7:
            case 8:
                roll[4] = 3;
                document.getElementById("myNumberE").src = "Berries/Pickleberry.png";
                break;
            case 9:
                roll[4] = 4;
                document.getElementById("myNumberE").src = "Berries/Moonberry.png";
                break;
            default:
                roll[4] = 5;
                document.getElementById("myNumberE").src = "Berries/Fly.png";
                break;
        }
    }
    rollCount -= 1;
    document.getElementById("shakeButton").innerHTML = "Roll: " + rollCount.toString();
}

function currentRoll() {
    return roll;
}
function resetRoll(){
    rollCount = 3;
    roll[0] = 0;
    roll[1] = 0;
    roll[2] = 0;
    roll[3] = 0;
    roll[4] = 0;
    document.getElementById("lockA").innerHTML = String.fromCodePoint(0x1F513);
    document.getElementById("lockB").innerHTML = String.fromCodePoint(0x1F513);
    document.getElementById("lockC").innerHTML = String.fromCodePoint(0x1F513);
    document.getElementById("lockD").innerHTML = String.fromCodePoint(0x1F513);
    document.getElementById("lockE").innerHTML = String.fromCodePoint(0x1F513);
    unlocked[0] = true;
    unlocked[1] = true;
    unlocked[2] = true;
    unlocked[3] = true;
    unlocked[4] = true;
    document.getElementById("shakeButton").innerHTML = "Roll: " + rollCount.toString();
}
