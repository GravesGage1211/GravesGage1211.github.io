var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
   function createSawBlade(x,y){
       var hitZoneSize = 30;
     var damageFromObstacle = 5;
     var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
     sawBladeHitZone.x = 400;
     sawBladeHitZone.y = 100;
     game.addGameItem(sawBladeHitZone);
     var obstacleImage = draw.bitmap("img/sawblade.png");
     sawBladeHitZone.addChild(obstacleImage);
     obstacleImage.x = -30
     obstacleImage.y = -30
    
   }

   createSawBlade(700, 400);
   createSawBlade(1000, 415);
   createSawBlade(1500, 340);
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);

    

    function startLevel(){

      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
         if(levelObjects[i].type === "sawblade") {
           createSawblade(levelObjects[i].x, levelObjects[i].y);
         }
         if(levelObjects[i].type === "obstacle") {
           createObstacle(levelObjects[i].x, levelObjects[i].y);
        }
         if (levelObjects[i].type === "reward") {
          createReward(levelObjects[i].x, levelObjects[i].y);
         }
         if(levelObjects[i].type === "end") {
           createLevelMarker(levelObjects[i].x, levelObjects[i].y);


       }

      }
    

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
}