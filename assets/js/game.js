var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // alert the players that they are starting the roung
    window.alert("Welcome to Robot Gladiators!");

    // subtract the value of playerAttack from the value of enemyHealt
    enemyHealth = enemyHealth - playerAttack;
    // log the resulting message to the console so we know thta it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }
    // subtract the value of enemyAttack from the value of playerHealth
    playerHealth = playerHealth - enemyAttack;
    // log the result in console so we know it worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
        window.alert(playerName + " has died.")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

};

fight();