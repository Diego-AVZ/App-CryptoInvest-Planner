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
    big : "yes", // investors¡`+
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

var narra = [];


function setInvCons() {
    investorType = "cons";
    document.getElementById("cB").style.borderColor = "rgb(0, 157, 255)";
    document.getElementById("cB").style.borderStyle = "solid";
    document.getElementById("cB").style.backgroundColor = "white";
    document.getElementById("cB").style.color = "black";
    document.getElementById("mB").style.borderStyle = "none";
    document.getElementById("mB").style.backgroundColor = "#030363";
    document.getElementById("mB").style.color = "white";
    document.getElementById("aB").style.borderStyle = "none";
    document.getElementById("aB").style.backgroundColor = "#030363";
    document.getElementById("aB").style.color = "white";
    seePot();
}

function setInvMod() {
    investorType = "mod";
    document.getElementById("mB").style.borderColor = "rgb(0, 157, 255)";
    document.getElementById("mB").style.borderStyle = "solid";
    document.getElementById("mB").style.backgroundColor = "white";
    document.getElementById("mB").style.color = "black";
    document.getElementById("cB").style.borderStyle = "none";
    document.getElementById("cB").style.backgroundColor = "#030363";
    document.getElementById("cB").style.color = "white";
    document.getElementById("aB").style.borderStyle = "none";
    document.getElementById("aB").style.backgroundColor = "#030363";
    document.getElementById("aB").style.color = "white";
    seePot();
}

function setInvAggr() {
    investorType = "aggr";
    document.getElementById("aB").style.borderColor = "rgb(0, 157, 255)";
    document.getElementById("aB").style.borderStyle = "solid";
    document.getElementById("aB").style.backgroundColor = "white";
    document.getElementById("aB").style.color = "black";
    document.getElementById("mB").style.borderStyle = "none";
    document.getElementById("mB").style.backgroundColor = "#030363";
    document.getElementById("mB").style.color = "white";
    document.getElementById("cB").style.borderStyle = "none";
    document.getElementById("cB").style.backgroundColor = "#030363";
    document.getElementById("cB").style.color = "white";
    seePot();
}

var amountIn = document.getElementById("in1");


function setAmount() {
    amountToInvest = amountIn.value;
}

function seeGoal() {
    var formattedGoal = goal.toLocaleString('en-US');

    document.getElementById("dti1").innerText = "$" + formattedGoal;
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

var rx = document.getElementById("rx2");
var px = document.getElementById("px2");

document.getElementById("g1").addEventListener("click", function(){
    xs = 5;
   setAmount();
    goal = amountToInvest * 5;
    seeGoal();
    rx.style.width = "2vw";
    px.style.width = "8vw";
    document.getElementById("g1").style.backgroundColor = "rgb(190 235 255)";
    document.getElementById("g1").style.fontSize = "1.4vw";
    document.getElementById("g2").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g2").style.fontSize = "1vw";
    document.getElementById("g3").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g3").style.fontSize = "1vw";
    document.getElementById("g4").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g4").style.fontSize = "1vw";
    document.getElementById("g5").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g5").style.fontSize = "1vw";
}) 

document.getElementById("g2").addEventListener("click", function(){
    xs = 10;
   setAmount();
    goal = amountToInvest * 10;
    seeGoal();
    rx.style.width = "3vw";
    px.style.width = "7vw";
    document.getElementById("g2").style.backgroundColor = "rgb(190 235 255)";
    document.getElementById("g2").style.fontSize = "1.4vw";
    document.getElementById("g1").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g1").style.fontSize = "1vw";
    document.getElementById("g3").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g3").style.fontSize = "1vw";
    document.getElementById("g4").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g4").style.fontSize = "1vw";
    document.getElementById("g5").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g5").style.fontSize = "1vw";
   
}) 

document.getElementById("g3").addEventListener("click", function(){
    xs = 15;
   setAmount();
    goal = amountToInvest * 15;
    seeGoal();
    rx.style.width = "4vw";
    px.style.width = "6vw";
    document.getElementById("g3").style.backgroundColor = "rgb(190 235 255)";
    document.getElementById("g3").style.fontSize = "1.4vw";
    document.getElementById("g2").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g2").style.fontSize = "1vw";
    document.getElementById("g1").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g1").style.fontSize = "1vw";
    document.getElementById("g4").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g4").style.fontSize = "1vw";
    document.getElementById("g5").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g5").style.fontSize = "1vw";
}) 

document.getElementById("g4").addEventListener("click", function(){
    xs = 25;
   setAmount();
    goal = amountToInvest * 25;
    seeGoal();
    rx.style.width = "5vw";
    px.style.width = "4vw";
    document.getElementById("g4").style.backgroundColor = "rgb(190 235 255)";
    document.getElementById("g4").style.fontSize = "1.4vw";
    document.getElementById("g2").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g2").style.fontSize = "1vw";
    document.getElementById("g3").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g3").style.fontSize = "1vw";
    document.getElementById("g1").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g1").style.fontSize = "1vw";
    document.getElementById("g5").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g5").style.fontSize = "1vw";
   
})

document.getElementById("g5").addEventListener("click", function(){
    xs = 50;
   setAmount();
    goal = amountToInvest * 50;
    seeGoal();
    rx.style.width = "7vw";
    px.style.width = "3vw";
    document.getElementById("g5").style.backgroundColor = "rgb(190 235 255)";
    document.getElementById("g5").style.fontSize = "1.4vw";
    document.getElementById("g2").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g2").style.fontSize = "1vw";
    document.getElementById("g3").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g3").style.fontSize = "1vw";
    document.getElementById("g4").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g4").style.fontSize = "1vw";
    document.getElementById("g1").style.backgroundColor = "rgb(195 242 255 / 48%)";
    document.getElementById("g1").style.fontSize = "1vw";
}) 

document.getElementById("xpB1").addEventListener("click", function(){
    investorLevel = "new";
    document.getElementById("xpB1").style.borderColor = "rgb(0, 157, 255)"
    document.getElementById("xpB1").style.borderStyle = "solid";
    document.getElementById("xpB1").style.backgroundColor = "white";
    document.getElementById("xpB1").style.color = "black";
    document.getElementById("xpB2").style.borderStyle = "none";
    document.getElementById("xpB2").style.backgroundColor = "#030363";
    document.getElementById("xpB2").style.color = "white";
    document.getElementById("xpB3").style.borderStyle = "none";
    document.getElementById("xpB3").style.backgroundColor = "#030363";
    document.getElementById("xpB3").style.color = "white";
}) 

document.getElementById("xpB2").addEventListener("click", function(){
    investorLevel = "med";
    document.getElementById("xpB2").style.borderColor = "rgb(0, 157, 255)"
    document.getElementById("xpB2").style.borderStyle = "solid";
    document.getElementById("xpB2").style.backgroundColor = "white";
    document.getElementById("xpB2").style.color = "black";
    document.getElementById("xpB1").style.borderStyle = "none";
    document.getElementById("xpB1").style.backgroundColor = "#030363";
    document.getElementById("xpB1").style.color = "white";
    document.getElementById("xpB3").style.borderStyle = "none";
    document.getElementById("xpB3").style.backgroundColor = "#030363";
    document.getElementById("xpB3").style.color = "white";
}) 

document.getElementById("xpB3").addEventListener("click", function(){
    investorLevel = "exp";
    document.getElementById("xpB3").style.borderColor = "rgb(0, 157, 255)"
    document.getElementById("xpB3").style.borderStyle = "solid";
    document.getElementById("xpB3").style.backgroundColor = "white";
    document.getElementById("xpB3").style.color = "black";
    document.getElementById("xpB2").style.borderStyle = "none";
    document.getElementById("xpB2").style.backgroundColor = "#030363";
    document.getElementById("xpB2").style.color = "white";
    document.getElementById("xpB1").style.borderStyle = "none";
    document.getElementById("xpB1").style.backgroundColor = "#030363";
    document.getElementById("xpB1").style.color = "white";
}) 



document.getElementById("n1").addEventListener("click", function(){
    
    var isHere = narra.indexOf("AI");

    if (isHere !== -1) {
        
        narra.splice(isHere, 1);
        document.getElementById("n1").classList.remove("clicked");
    } else {
        
        narra.push("AI");
        document.getElementById("n1").classList.add("clicked");

    }    
}) 

document.getElementById("n2").addEventListener("click", function(){
    
    var isHere = narra.indexOf("IOT");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n2").classList.remove("clicked");
    } else {
        narra.push("IOT");
        document.getElementById("n2").classList.add("clicked");

    }    
}) 

document.getElementById("n3").addEventListener("click", function(){
    
    var isHere = narra.indexOf("ISO20022");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n3").classList.remove("clicked");
    } else {
        narra.push("ISO20022");
        document.getElementById("n3").classList.add("clicked");

    }    
}) 

document.getElementById("n4").addEventListener("click", function(){
    
    var isHere = narra.indexOf("L2");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n4").classList.remove("clicked");
    } else {
        narra.push("L2");
        document.getElementById("n4").classList.add("clicked");

    }    
}) 

document.getElementById("n5").addEventListener("click", function(){
    
    var isHere = narra.indexOf("L1");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n5").classList.remove("clicked");
    } else {
        narra.push("L1");
        document.getElementById("n5").classList.add("clicked");

    }    
}) 

document.getElementById("n6").addEventListener("click", function(){
    
    var isHere = narra.indexOf("Modular");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n6").classList.remove("clicked");
    } else {
        narra.push("Modular");
        document.getElementById("n6").classList.add("clicked");
    }    
}) 

document.getElementById("n7").addEventListener("click", function(){
    
    var isHere = narra.indexOf("Privacy");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n7").classList.remove("clicked");
    } else {
        narra.push("Privacy");
        document.getElementById("n7").classList.add("clicked");
    }    
}) 

document.getElementById("n8").addEventListener("click", function(){
    
    var isHere = narra.indexOf("DePIN");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n8").classList.remove("clicked");
    } else {
        narra.push("DePIN");
        document.getElementById("n8").classList.add("clicked");
    }    
}) 

document.getElementById("n9").addEventListener("click", function(){
    
    var isHere = narra.indexOf("RWA");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n9").classList.remove("clicked");
    } else {
        narra.push("RWA");
        document.getElementById("n9").classList.add("clicked");
    }    
}) 

document.getElementById("n10").addEventListener("click", function(){
    
    var isHere = narra.indexOf("Gaming");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n10").classList.remove("clicked");
    } else {
        narra.push("Gaming");
        document.getElementById("n10").classList.add("clicked");
    }    
}) 

document.getElementById("n11").addEventListener("click", function(){
    
    var isHere = narra.indexOf("Identity");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n11").classList.remove("clicked");
    } else {
        narra.push("Identity");
        document.getElementById("n11").classList.add("clicked");
    }    
}) 

document.getElementById("n12").addEventListener("click", function(){
    
    var isHere = narra.indexOf("Interop");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n12").classList.remove("clicked");
    } else {
        narra.push("Interop");
        document.getElementById("n12").classList.add("clicked");
    }    
}) 

document.getElementById("n13").addEventListener("click", function(){
    
    var isHere = narra.indexOf("DeFi");

    if (isHere !== -1) {
        narra.splice(isHere, 1);
        document.getElementById("n13").classList.remove("clicked");
    } else {
        narra.push("DeFi");
        document.getElementById("n13").classList.add("clicked");
    }    
}) 





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
var filter32 = []; // Narrative 2 (les important): ISO, IOT, IA, DePIN, Priv, L1, L2, RWA, gaming, DID, DeFi, modular, interop
var filter4 = []; // Big Investors/partners: yes / no
var filter5 = []; // Number of coins in portfolio || investor level: expert == more coins

function seeListAlgo() {
        if(investorType == "cons"){
            for(var i = 0; i < all.length; i++) {
                if (all[i].risk == "mid" || all[i].risk == "low") {
                    filter1.push(all[i]);
                }
            }
        } else if(investorType == "mod"){
            for(var i = 0; i < all.length; i++) {
                if (all[i].risk == "mid" || all[i].risk == "low") {
                    filter1.push(all[i]);
                }
            }
        } else {
            for(var i = 0; i < all.length; i++) {
                filter1 = all;
            }
        }

        if (xs == 5) {
            for(var i = 0; i < filter1.length; i++) {
                if (filter1[i].pot == "x5" || filter1[i].pot == "x10") {
                    filter2.push(filter1[i]);
                }
            }
        } else if (xs == 10) {
            for(var i = 0; i < filter1.length; i++) {
                if (filter1[i].pot == "x10" || filter1[i].pot == "x15") {
                    filter2.push(filter1[i]);
                }
            }
        } else if (xs == 15) {
            for(var i = 0; i < filter1.length; i++) {
                if (filter1[i].pot == "x15" || filter1[i].pot == "x20") {
                    filter2.push(filter1[i]);
                }
            }
        } else if (xs == 20) {
            for(var i = 0; i < filter1.length; i++) {
                if (filter1[i].pot == "x20" || filter1[i].pot == "x50") {
                    filter2.push(filter1[i]);
                }
            }
        } else {
            for(var i = 0; i < filter1.length; i++) {
                if (filter1[i].pot == "x50") {
                    filter2.push(filter1[i]);
                }
            }
        }

        for(var n = 0; n < narra.length; n++){
            
            for(var t = 0; t < filter2.length; t++){
                
                if(filter2[t].narrative == narra[n].toLowerCase()){
                    filter3.push(filter2[t]);
                }
            }
        }

        for(var n = 0; n < narra.length; n++){
            
            for(var t = 0; t < filter2.length; t++){
                
                if(filter2[t].narrative2 == narra[n].toLowerCase()){
                    filter32.push(filter2[t]);
                }
            }
        }

        var divBlack = document.getElementById("black");
        divBlack.style.display = "block";

        for(var to = 0; to < filter3.length; to++) {
            var newToken = document.createElement("p");
            newToken.innerText = filter3[to].name;
            divBlack.appendChild(newToken);
        }
}

function next() {
    if (investorType != undefined && amountToInvest != undefined && goal != undefined && investorLevel != undefined && narra.length != 0) {
        document.getElementById("box").style.left = "41%";
        document.getElementById("goB").style.marginLeft = "84vw";
    }

}

setInterval(next, 1000);

