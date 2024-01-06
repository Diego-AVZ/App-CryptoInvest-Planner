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

var token3;
var token4;
var token5;
var token6;
var token7;
var token8;
var token9;
var token10;

//_____________________________________________________________________________________________________

var investorType; //Cons or Risky

var amountToInvest;

var goal;



var all = [
    token1,
    token2,
    token3,
    token4,
    token5,
    token6,
    token7,
    token8,
    token9,
    token10
  ];
  
var filter1 = []; // Investor Type : Conservative, Moderate or Aggressive
var filter2 = []; // Potencial: x5, x10, x25, x50, >x50
var filter3 = []; // Narrative: ISO, IOT, IA, DePIN, Priv, L1, L2, RWA, gaming, DID, DeFi, modular
var filter4 = []; // Big Investors/partners: yes / no
var filter5 = []; // 

function seeListAlgo() {
    for(var i = 0; i < all.length; i++) {
        if (all[i].risk == "high") {
            filter1.push(all[i].name);
            console.log("list token: " + all[i].name);
        }
    }
}
