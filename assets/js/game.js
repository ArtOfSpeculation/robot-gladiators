var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyAttack);
console.log(Math.max(10,-20,100,201))


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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            } 
        }
            
        //remove enemy's health by subtracting playerAttack
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        
                console.log(
                    playerName + " attacked " + enemyName + " for " + damage + " damage. " + enemyName + " now has " + enemyHealth + " health remaining."
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
                var damage = randomNumber(enemyAttack - 3, enemyAttack);
                playerHealth = Math.max(0, playerHealth - damage);
                
                console.log(
                    enemyName + " attacked " + playerName + " for " + damage + " damage. " + playerName + " now has " + playerHealth + " health remaining."
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
            enemyHealth = randomNumber(40, 60);
    
            debugger;
    
            // pass the pickedEnemyName value as an argument into fight function
            fight(pickedEnemyName);

            // check SHOP eligibility and option to SHOP
            if(i < (enemyNames.length - 1) && playerHealth > 0){
                // ask if player wishes to ENTER the SHOP before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                
                //if yes ENTER SHOP i.e., shop()
                if(storeConfirm) {
                    shop();
                }
            }


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
    window.alert("The game has now ended. Let's see how you did!");
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
};

// The SHOP
// SHOP eligibility i.e., the player is alive or has money, is NOT checked in the SHOP; be sure to check eligibilty BEFORE SENDING to SHOP
var shop = function () {
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL you health, UPGRADE your attack or LEAVE the store?  Please enter on: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
    
                // increase health and decrease money
                playerMoney -= 7;
                playerHealth += 20;
            }else{
                window.alert("You don't have enough money.");
                shop();
            }
            break;
        case "upgrade":
        case "Upgrade":
        case "UPGRADE":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
        
                // increase attack and decrease money
                playerMoney -= 7;
                playerAttack += 6;
            }else{
                window.alert("You don't have enough money.");
                shop();
            }
            break;
        case "leave":
        case "Leave":
        case "LEAVE":
            
            // do nothing, END function
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

// RANDOMIZER function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// start a game when the page loads
startGame();
