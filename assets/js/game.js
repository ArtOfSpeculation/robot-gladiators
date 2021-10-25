var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or skip/quit
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if the player picks SKIP then confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            
            // if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye.");
                // subtract the money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
        }
            
        //remove enemy's health by subtracting playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
            
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;  

            // leave the while() loop since enemy is dead
            break;   
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        
        // remove the value of enemyAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
            
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died.");
            // leave the while() loop as the player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
};
        
        for(var i = 0; i < enemyNames.length; i++) {
            debugger;
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 20;
            fight(pickedEnemyName);
        }


        // // alert the players that they are starting the roung
        // window.alert("Welcome to Robot Gladiators!");