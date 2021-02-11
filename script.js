function roll (die) {
    return (
        Math.floor(Math.random()* die +1)
    )
}
function rollMultipleDie (die, numDie = 1) {
    let dieInputArr = [];
    for(i = 0; i < numDie; i++) {
        dieInputArr.push(roll(die));
    }
    return dieInputArr;
}
function modifiedRoll(die,mod) {
    return (roll(die) + mod )
} 
function multipleModifedRoll(die,numDie,mod, dieMod) {
    let dieInputArr = [];
    for(i=0; i < numDie; i++) {
        dieInputArr.push(modifiedRoll(die,mod) + dieMod);
    }
    return dieInputArr;
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
function high (die,passNum,modifer) {
    let a = modifiedRoll(die,modifer);
    
    if(a >= passNum) {
        return "pass"
    } return "fail"
}
function low(die,passNum,modifer) {
    let a = modifiedRoll(die, modifer);

    if(a <= passNum) {
        return "pass"
    } return "fail"
}
function statsDropLowest() {
    let stats = 0;
    let a = roll(6);
    let b = roll(6);
    let c = roll(6);
    let d = roll(6);
    stats = a + b + c + d;
    let least = a;
    least = (b < least) ? b : least;
    least = (c < least) ? c : least;
    least = (d < least) ? d : least; 
    stats -= least;
    return stats
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
function characterStatsDropLowest() {
    let stats = [];
    let a = statsDropLowest();
    let b = statsDropLowest();
    let c = statsDropLowest();
    let d = statsDropLowest();
    let e = statsDropLowest();
    let f = statsDropLowest();
    stats.push(a,b,c,d,e,f);
    return stats
}
function characterStatsRerollOnesDropLowest() {
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
let resultsHistory = [];
let dieInputArr = [];
const dieOption = document.getElementById("choose-a-die-option");
//this function closes forms when they are not choosen
dieOption.addEventListener("change", function() {
    let currentOption = dieOption.value; 
    if(dieInputArr.length >= 1) {
        for(i=0;i < dieInputArr.length; i++) {
            if(dieInputArr[i] !== currentOption) {
            document.getElementById([dieInputArr[i]]).style.display = "none";
            }
                }
        dieInputArr = [];
    } 
    if(currentOption === "") {
    } else {
        document.getElementById([currentOption]).style.display = "inline";
        dieInputArr.push(currentOption);
       }
})
//start of basic roll
const baseDieRollSides = document.getElementById("number-of-sides-base-die-roll");
const baseDieRollNumberOfDie = document.getElementById("number-of-base-die");
const baseDieRollSubmitButton = document.getElementById("base-die-submit-button");
const baseDieRollResults = document.getElementById("base-die-results");
baseDieRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(baseDieRollSides.value);
    let numDie = parseInt(baseDieRollNumberOfDie.value);
    let rollResults = rollMultipleDie(dieSides,numDie);
    baseDieRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//start of modifed roll
const modifiedDieRollSides = document.getElementById("number-of-sides-modifed-die-roll");
const modifiedDieRollNumberOfDie = document.getElementById("number-of-modifed-die");
const modifedDieRollModifer = document.getElementById("modifer-modifed-die");
const modifedDiceModifer = document.getElementById("dice-modifer-modifed-die");
const modifedDieRollSubmitButton = document.getElementById("modifed-die-submit-button");
const modifedDieRollResults = document.getElementById("modifed-die-results");
modifedDieRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(modifiedDieRollSides.value);
    let numDie = parseInt(modifiedDieRollNumberOfDie.value);
    let modifer = parseInt(modifedDieRollModifer.value);
    let dieModifer = parseInt(modifedDiceModifer.value);
    let rollResults = multipleModifedRoll(dieSides,numDie,modifer,dieModifer);
    modifedDieRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//start of advantage roll
const advantageDieRollSides = document.getElementById("number-of-advantage-die-sides");
const advantageDieRollModifer = document.getElementById("modifer-advantage-die");
const advantageDieRollSubmitButton = document.getElementById("advantage-die-submit-button");
const advantageDieRollResults = document.getElementById("advantage-die-results");
advantageDieRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(advantageDieRollSides.value);
    let modifer = parseInt(advantageDieRollModifer.value);
    let rollResults = advantage(dieSides,modifer);
    advantageDieRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//start of disadvantage roll

const disadvantageDieRollSides = document.getElementById("number-of-disadvantage-die-sides");
const disadvantageDieRollModifer = document.getElementById("disadvantage-die-modifer");
const disadvantageDieRollSubmitButton = document.getElementById("disadvantage-die-submit-button");
const disadvantageDieRollResults = document.getElementById("disadvantage-die-results");

disadvantageDieRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(disadvantageDieRollSides.value);
    let modifer = parseInt(disadvantageDieRollModifer.value);
    let rollResults = disadvantage(dieSides,modifer);
    disadvantageDieRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//start of high roll
const highRollDieSides = document.getElementById("high-roll-die-sides");
const highRollDiePassNumber = document.getElementById("high-roll-pass-number");
const highRollModiferNumber = document.getElementById("high-roll-modifer");
const highRollSubmitButton = document.getElementById("high-roll-submit-button");
const highRollResults = document.getElementById("high-roll-results");
highRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(highRollDieSides.value);
    let passNumber = parseInt(highRollDiePassNumber.value);
    let modifer = parseInt(highRollModiferNumber.value);
    let rollResults = high(dieSides,passNumber,modifer);
    highRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//start of low roll
const lowRollDieSides = document.getElementById("low-roll-die-sides");
const lowRollDiePassNumber = document.getElementById("low-roll-pass-number");
const lowRollModiferNumber = document.getElementById("low-roll-modifer");
const lowRollSubmitButton = document.getElementById("low-roll-submit-button");
const lowRollResults = document.getElementById("low-roll-results");
lowRollSubmitButton.addEventListener("click", function() {
    let dieSides = parseInt(lowRollDieSides.value);
    let passNumber = parseInt(lowRollDiePassNumber.value);
    let modifer = parseInt(lowRollModiferNumber.value);
    let rollResults = low(dieSides,passNumber,modifer);
    lowRollResults.innerHTML = rollResults;
    resultsHistory.push(rollResults);
    document.getElementById("results-history").innerHTML = resultsHistory;
})
//select character stats form
let characterStatsArr = [];
const characterStatOption = document.getElementById("choose-a-character-stat-option")
characterStatOption.addEventListener("change", function() {
    let currentOption = characterStatOption.value; 
    if(characterStatsArr.length >= 1) {
        for(i=0;i < characterStatsArr.length; i++) {
            if(characterStatsArr[i] !== currentOption) {
            document.getElementById([characterStatsArr[i]]).style.display = "none";
            }
                }
        characterStatsArr = [];
    } 
    if(currentOption === "") {
    } else {
        document.getElementById([currentOption]).style.display = "inline";
        characterStatsArr.push(currentOption);
       }
})
//start of character stats rerool ones drop lowest
const characterStatRerollOnesButton = document.getElementById("character-stats-reroll-ones-button");
const characterStatRerollOnesResults = document.getElementById("character-stats-reroll-ones-results");
characterStatRerollOnesButton.addEventListener("click", function() {
    characterStatRerollOnesResults.innerHTML = characterStatsRerollOnesDropLowest();
})
//character drop lowest
const characterStatDropLowestButton = document.getElementById("character-stats-drop-lowest-button");
const characterStatsDropLowestResults = document.getElementById("character-stats-drop-lowest-results");
characterStatDropLowestButton.addEventListener("click", function () {
    characterStatsDropLowestResults.innerHTML = characterStatsDropLowest(); 
})
const clearResultsHistoryButton = document.getElementById("clear-results-history-button");
clearResultsHistoryButton.addEventListener("click", function() {
    document.getElementById("results-history").innerHTML = [];
    resultsHistory = [];
})