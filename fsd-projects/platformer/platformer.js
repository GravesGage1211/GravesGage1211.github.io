$(function () { 
  // initialize canvas and context when able to 
  canvas = document.getElementById("canvas"); 
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson); 

  function setup() {
    if (firstTimeSetup) { 
      halleImage = document.getElementById("player");  
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);  
      $(document).on("keyup", handleKeyUp); 
      firstTimeSetup = false; 
      //start game 
      setInterval(main, 1000 / frameRate); 
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid(); 


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "lime");
createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform
 createPlatform(200, 605, 50, 50, "lime");
  createPlatform(400, 500, 50, 50, "lime");
createPlatform(600, 500, 50, 50, "lime");
createPlatform(800, 400, 100, 20, "lime");
createPlatform(1000, 250, 100, 20, "lime");




    // TODO 3 - Create Collectables
createCollectable("steve", 400, 450);
createCollectable("steve", 200, 170, 0.7, 0.7);
createCollectable("steve", 1200, 700);

    
    // TODO 4 - Create Cannons
createCannon("top", 600, 1500);
createCannon("right", 300, 1500);
createCannon("top", 350, 1500);
createCannon("top", 750, 1500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
 