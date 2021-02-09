function roll (die) {
    return (
        Math.floor(Math.random()* die +1)
    )
}
function rollMultipleDie (die, numDie = 1) {
    let arr = [];
    for(i = 0; i < numDie; i++) {
        arr.push(Math.floor(Math.random()) * die +1);
    }
    return arr;
}
function modifiedRoll (Die,Mod) {
    return (roll(Die) + Mod )
} 
function advantage(x,y) {
    let a = modifiedRoll(x,y);
    let b = modifiedRoll(x,y);
    if(a > b) { 
        return a
    } return b
}
function disadvantage(x,y) {
    let a = modifiedRoll(x,y)
    let b = modifiedRoll(x,y)
     if(a < b) {
         return a
        } return b
}
function skillCheck(x,y,z) {
    let a = modifiedRoll(x,y);
    
    if(a >= z) {
        return "pass"
    } return "fail"
}
function high (x,y) {
    let a = modifiedRoll(100,x);
    
    if(a >= y) {
        return "pass"
    } return "fail"
}
function low(x,y) {
    let a = modifiedRoll(100,x);

    if(a <= y) {
        return "pass"
    } return "fail"
}
function statsRerollOne() {
    
    let stats = 0;
    let a = roll(6);
    let b = roll(6);
    let c = roll(6);
    let d = roll(6);
    while(a < 2) {
        a = roll(6);
    }
    while(b < 2) {
        b = roll(6);
    }
    while(c < 2) {
        c = roll(6);
    }
    while(d < 2) {
        d = roll(6);
    }
    stats = a + b + c + d;
    let least = a;
    least = (b < least) ? b : least;
    least = (c < least) ? c : least;
    least = (d < least) ? d : least; 
    stats -= least;
    return stats
}
function rollStats() {
    let stats = [];
    let a = statsRerollOne();
    let b = statsRerollOne();
    let c = statsRerollOne();
    let d = statsRerollOne();
    let e = statsRerollOne();
    let f = statsRerollOne();
    stats.push(a,b,c,d,e,f);
    return stats
}

//Start of HTML interaction
let arr = [];
const dieOption = document.getElementById("choose-a-die-option");
//this function closes forms when they are not choosen
dieOption.addEventListener("change", function() {
    let currentOption = dieOption.value; 
    if(arr.length >= 1) {
        for(i=0;i < arr.length; i++) {
            if(arr[i] !== currentOption) {
            document.getElementById([arr[i]]).style.display = "none";
            }
                }
        arr = [];
    } 
    if(currentOption === "") {
        alert('choose an option');
    } else {
        document.getElementById([currentOption]).style.display = "inline";
        arr.push(currentOption);
       }
})
const baseDieRollSides = document.getElementById("number-of-sides-base-die-roll").value;
const baseDieRollNumberOfDie = document.getElementById("number-of-base-die").value;
const baseDieRollSubmitButton = document.getElementById("base-die-submit-button");
const baseDieRollResults = document.getElementById("base-die-results");

baseDieRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(baseDieRollSides);
    let numDie = parseInt(baseDieRollNumberOfDie);
    let rollResults = rollMultipleDie(dieSides,numDie);
    console.log(dieSides,numDie);
    console.log(rollResults);
    baseDieRollResults.innerHTML = rollResults;
})
console.log(rollMultipleDie(20, 2));