var token1 = {
    name: "ROSE",
    narrative : "privacy",
    price : {
        current : 0.1, //API
        buyBottom : 0.03,
        buyTop : 0.08
    },
    risk : "low"
};

console.log(token1.price.buyBottom);

var token2 = {
    name : "SMT",
    narrative : "RWA",
    price : {
        current : 0.5, //API
        buyBottom : 0.3,
        buyTop : 0.5
    },
    risk : "high"
};

var allTokens = [token1, token2]
var firstFilter = [];

function seeListAlgo() {
    for(var i = 0; i < allTokens.length; i++) {
        if (allTokens[i].risk == "high") {
            firstFilter.push(allTokens[i].name);
            console.log("list token: " + allTokens[i].name);
        }
    }
}

seeListAlgo();

var token3;
var token4;
var token5;
var token6;
var token7;
var token8;
var token9;
var token10;

var investorType; //Cons or Risky

var amountToInvest;

var narrative1;
var narrative2;
var narrative3;
var narrative4;
var narrative5;

