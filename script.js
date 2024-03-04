let MoneyPerClick = 1;
let Money = 1;
let MoneyPerSecond = 0;
let RealMoneyPerSecond = 1;
  
//---------------\\

let MPCcost = 10;
let MPSCost = 100;

//---------------\\

let EnemyHP = 100;
let Rebirths = 1;
let RebirthCost = 1000;

//---------------\\

// Money Per Click \\

function MoreMoney() {
  Money += MoneyPerClick * Rebirths;
  document.getElementById("Money").innerHTML = Money;
}

// Money Per Click Upgrade \\

function MPC() {
  if (Money >= MPCcost) {
    
    MoneyPerClick += 1;
    
    Money -= MPCcost;
    
    MPCcost = Math.round(MPCcost *= 1.333 / Rebirths * Rebirths / 1.1);
    document.getElementById("MoneyPerClickCostID").innerHTML = "Money Per Click Cost: " + MPCcost;
    
    document.getElementById("Money").innerHTML = Money;
    
    document.getElementById("MoneyPerClickID").innerHTML = "Money Per Click: " + MoneyPerClick  + " x " + Rebirths;
  }
}

// Fight The Enemy \\

function FightEnemy() {
  if (Money >= EnemyHP) {
    
    EnemyHP = Math.round(EnemyHP *= 1.5 * Rebirths / 1.3);
    
    alert("You Won!");
    
    MoneyPerClick += 2;
    
    document.getElementById("MoneyPerClickID").innerHTML = "Money Per Click: " + MoneyPerClick + " x " + Rebirths;
    
    document.getElementById("EnemyHP").innerHTML = "Enemy HP: " + EnemyHP;
  } else {
    
    MoneyPerClick -= 2;
    
    alert("You Lost, Get Good! (The key is to have more money then their health.)");
    
    document.getElementById("MoneyPerClickID").innerHTML = "Money Per Click: " + MoneyPerClick + " x " + Rebirths;
    
    document.getElementById("EnemyHP").innerHTML = "Enemy HP: " + EnemyHP;
  }
}

// Just A Rebirth :) \\

function Rebirth() {
  if (Money >= RebirthCost) {
    
    Rebirths += 1;
    
    Money -= RebirthCost;

    MPCcost = 10;

    MoneyPerClick = 1;

    MoneyPerSecond = 0;

    RealMoneyPerSecond += 1;

    MPSCost = 100;

    EnemyHP = 100;
    
    RebirthCost = Math.round(RebirthCost *= 1.333 * Rebirths / 1.3);
    
    document.getElementById("RebirthCostID").innerHTML = "Rebirth Cost: " + RebirthCost;
    
    document.getElementById("RebirthsID").innerHTML = "Rebirths: " + Rebirths;
    
    document.getElementById("Money").innerHTML = Money;
    
    document.getElementById("MoneyPerClickID").innerHTML = "Money Per Click: " + MoneyPerClick  + " x " + Rebirths;

  document.getElementById("MoneyPerClickCostID").innerHTML = "Money Per Click Cost: " + MPCcost;

    document.getElementById("MPSCost").innerHTML = "Money Per Second Cost: " + MPSCost;

    document.getElementById("MPS").innerHTML = "Money Per Second: " + MoneyPerSecond;

    document.getElementById("EnemyHP").innerHTML = "Enemy HP: " + EnemyHP;
  }
}

// More Money Per Second \\

function MPS() {
  if (Money >= MPSCost) {
    MoneyPerSecond += 1;
    
    Money -= MPSCost;

    document.getElementById("Money").innerHTML = Money;
    
    MPSCost = Math.round(MPSCost *= 1.333 / Rebirths * Rebirths / 1.2);

    setInterval(MoneyPerSeconds, 1000);
    
    document.getElementById("MPS").innerHTML = "Money Per Second: " + MoneyPerSecond + " x " + Rebirths;
    
    document.getElementById("MPSCost").innerHTML = "Money Per Second Cost: " + MPSCost;
    
  }
}

// +1 Money Per Second \\

function MoneyPerSeconds() {
  Money += RealMoneyPerSecond;
  
  document.getElementById("Money").innerHTML = Money;
}

// Double or Halve money \\

function RandomButton() {
  let RandomNumber = Math.floor(Math.random() * 2);
  if (RandomNumber == 0) {
    Money =  Math.round(Money *= 0.5);
    document.getElementById("Money").innerHTML = Money;
  } else if (RandomNumber == 1) {
    Money = Math.round(Money *= 2);
    document.getElementById("Money").innerHTML = Money;
  }
}

// Make Everything Load \\

document.getElementById("EnemyHP").innerHTML = "Enemy HP: " + EnemyHP;

document.getElementById("MoneyPerClickCostID").innerHTML = "Money Per Click Cost: " + MPCcost;

document.getElementById("MoneyPerClickID").innerHTML = "Money Per Click: " + MoneyPerClick  + " x " + Rebirths;

document.getElementById("RebirthCostID").innerHTML = "Rebirth Cost: " + RebirthCost;

document.getElementById("RebirthsID").innerHTML = "Rebirths: " + Rebirths;

document.getElementById("Money").innerHTML = Money;

document.getElementById("MPS").innerHTML = "Money Per Second: " + MoneyPerSecond + " x " + Rebirths;

document.getElementById("MPSCost").innerHTML = "Money Per Second Cost: " + MPSCost;