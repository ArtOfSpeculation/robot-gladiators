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
        
// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            // Let the player know the Round #
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));    
    
            // pick new enemy to figth based on array
            var pickedEnemyName = enemyNames[i];
    
            // reset enemy's health before new battle
            enemyHealth = 20;
    
            debugger;
    
            // pass the pickedEnemyName value as an argument into fight function
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }
    // after i) loop runs out ii) player dies or iii) is out of enemies, end game
    endGame();
}

// function to end the entire game
var endGame = function() {
    // if the player is still alive, they win.
    window.alert("The game has now MediaElementAudioSourceNode. Let's see how you did!");
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");        
    } else {
        // if the player is dead, they lose.
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgain = window.confirm("Would you like to play again?");
    if(playAgain) {
        startGame();
    } else {
        window.alert("Thanks for playing Robot Gladiators! Come back soon.");
    }
}


// start a game when the page loads
startGame();
