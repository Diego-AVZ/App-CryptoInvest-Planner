var token1 = {
    name: "BTC",
    narrative : "none",
    narrative2 : "none",
    buy : {
        bottom : 15000, // RANGE low
        Top : 35000     // RANGE high
    },
    sell : {
        bottom : 100000,
        top : 300000
    },
    risk : "low",
    pot : "x5",  // potencial profit
    big : "yes", // investors
    stra1 : {
        yon : "yes", // There is a strategy 1? yes/no
        sRisk : "mid",
        APY : "3%",
        action : "lend",
        plat : "aave",
        block : "ethereumOrL2"
    }
};

var token2 = {
    name: "ETH",
    narrative : "L1",
    narrative2 : "none",
    buy : {
        bottom : 800, // RANGE low
        Top : 1800     // RANGE high
    },
    sell : {
        bottom : 7000,
        top : 10000
    },
    risk : "low",
    pot : "x5",  // potencial profit
    big : "yes", // investors
    stra1 : {
        yon : "yes", // There is a strategy 1? yes/no
        sRisk : "mid",
        APY : "3%",
        action : "lend",
        plat : "aave",
        block : "ethereumOrL2"
    }
};

var token3 = {
    name: "DOT",
    narrative : "interop",
    narrative2 : "modular",
    buy : {
        bottom : 4, // RANGE low
        Top : 12     // RANGE high
    },
    sell : {
        bottom : 30,
        top : 100
    },
    risk : "low",
    pot : "x10",  // potencial profit
    big : "yes", // investors
    stra1 : {
        yon : "yes", // There is a strategy 1? yes/no
        sRisk : "low",
        APY : "15%",
        action : "stake",
        plat : "polkadot staking",
        block : "polkadot"
    }
};
var token4 = {
    name: "ADA",
    narrative : "L1",
    narrative2 : "none",
    buy : {
        bottom : 0.3, // RANGE low
        Top : 0.8     // RANGE high
    },
    sell : {
        bottom : 2,
        top : 5
    },
    risk : "low",
    pot : "x10",  // potencial profit
    big : "yes", // investors
    stra1 : {
        yon : "yes", // There is a strategy 1? yes/no
        sRisk : "low",
        APY : "5%",
        action : "stake",
        plat : "Cardano staking",
        block : "Cardano"
    }
};

var token5 = {
    name: "ROSE",
    narrative : "privacy",
    narrative2 : "modular",
    buy : {
        bottom : 0.04, // RANGE low
        Top : 0.15     // RANGE high
    },
    sell : {
        bottom : 0.5,
        top : 3
    },
    risk : "mid",
    pot : "x15",  // potencial profit
    big : "yes", // investors
    stra1 : {
        yon : "yes", // There is a strategy 1? yes/no
        sRisk : "low",
        APY : "1%",
        action : "stake",
        plat : "Oasis staking",
        block : "Oasis"
    }
};

var token6;
var token7;
var token8;
var token9;
var token10;

//_____________________________________________________________________________________________________

var investorType; //Cons or Risky

var amountToInvest;

var goal;

var investorLevel;

var xs;


function setInvCons() {
    investorType = "cons";
    // seePot();
}

function setInvMod() {
    investorType = "mod";
    // seePot();
}

function setInvAggr() {
    investorType = "aggr";
    // seePot();
}

/*
function setAmount() {
    amountToInvest = amountIn.value;
}


function seePot() {
    if(investorType == "cons") {
        document.getElementById("g1").style.display = "block"; // x5
        document.getElementById("g2").style.display = "block"; // x10
        document.getElementById("g3").style.display = "none"; // x15
        document.getElementById("g4").style.display = "none"; // x25
        document.getElementById("g5").style.display = "none"; // x50 or more
    } else if (investorType == "mod") {
        document.getElementById("g1").style.display = "block"; // x5
        document.getElementById("g2").style.display = "block"; // x10
        document.getElementById("g3").style.display = "block"; // x15
        document.getElementById("g4").style.display = "none"; // x25
        document.getElementById("g5").style.display = "none"; // x50 or more
    } else {
        document.getElementById("g1").style.display = "block"; // x5
        document.getElementById("g2").style.display = "block"; // x10
        document.getElementById("g3").style.display = "block"; // x15
        document.getElementById("g4").style.display = "block"; // x25
        document.getElementById("g5").style.display = "block"; // x50 or more
    }
}

document.getElementById("g1").addEventListener("click", function(){
    xs = 5;
    goal = amountToInvest * 5;
}) 

document.getElementById("g2").addEventListener("click", function(){
    xs = 10;
    goal = amountToInvest * 10;
}) 

document.getElementById("g3").addEventListener("click", function(){
    xs = 15;
    goal = amountToInvest * 15;
}) 

document.getElementById("g4").addEventListener("click", function(){
    xs = 25;
    goal = amountToInvest * 25;
})

document.getElementById("g5").addEventListener("click", function(){
    xs = 50;
    goal = amountToInvest * 50;
}) 

document.getElementById("l1").addEventListener("click", function(){
    investorLevel = "new";
}) 

document.getElementById("l2").addEventListener("click", function(){
    investorLevel = "med";
}) 

document.getElementById("l3").addEventListener("click", function(){
    investorLevel = "exp";
}) 
*/

var all = [
    token1,
    token2,
    token3,
    token4,
    token5
    /*,token6,
    token7,
    token8,
    token9,
    token10 */
  ];
  
var filter1 = []; // Investor Type : Conservative, Moderate or Aggressive
var filter2 = []; // Potencial: x5, x10, x25, x50, >x50
var filter3 = []; // Narrative: ISO, IOT, IA, DePIN, Priv, L1, L2, RWA, gaming, DID, DeFi, modular, interop
var filter4 = []; // Big Investors/partners: yes / no
var filter5 = []; // Number of coins in portfolio || investor level: expert == more coins

function seeListAlgo() {
        if(investorType == "cons"){
            for(var i = 0; i < all.length; i++) {
                if (all[i].risk == "low") {
                    filter1.push(all[i]);
                }
            }
        } else if(investorType == "mod"){
            for(var i = 0; i < all.length; i++) {
                if (all[i].risk == "mid" || all[i].risk == "low") {
                    filter1.push(all[i]);
                }
            }
        }

        if (xs == 5) {
            for(var i = 0; i < filter1.length; i++) {
                if (all[i].pot == "x5") {
                    filter2.push(all[i]);
                }
            }
        }
    console.log("filter2 = " + filter2);
}
