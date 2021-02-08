const { stat } = require("fs")

function roll (Die) {
    return (
        Math.floor(Math.random()* Die +1)
    )
}
function modifiedRoll (Die,Mod) {
    return (
        roll(Die) + Mod
    )
} 
function advantage(x,y) {
    let a = modifiedRoll(x,y)
    let b = modifiedRoll(x,y)
    if(
        a > b
    ) return a 
    else return b
}
function disadvantage(x,y) {
    let a = modifiedRoll(x,y)
    let b = modifiedRoll(x,y)
     if(
        a < b
    ) return a
    else return b
}
function skillCheck(x,y,z) {
    let a = modifiedRoll(x,y);
    
    if(a >= z) {
        return "pass"
    } else return "fail"
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
        let a = roll(6);
    }
    while(b < 2) {
        let b = roll(6);
    }
    while(c < 2) {
        let c = roll(6);
    }
    while(d < 2) {
        let d = roll(6);
    }
    stats = a + b + c + d;
    let least = a;
    least = (b < least) ? b : least;
    least = (c < least) ? c : least;
    least = (d < least) ? d : least; 
    stats -= least;
    return(
        stats
    )
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
    return (
        stats
    )
}
console.log(rollStats());
