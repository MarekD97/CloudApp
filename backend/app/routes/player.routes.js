module.exports = app => {
    const players = require("../controllers/player.controller.js");
  
    var router = require("express").Router();
    var statsRouter = require("express").Router();
  

    // Create a new Player
    router.post("/", players.create);
  
    // Retrieve all Players
    router.get("/", players.findAll);
  
    // Retrieve a single Player with id
    router.get("/:id", players.findOne);
  
    // Update a Player with id
    router.put("/:id", players.update);
  
    // Delete a Player with id
    router.delete("/:id", players.delete);
  
    // Delete all Players
    router.delete("/", players.deleteAll);

    // Get average ages by nationality
    statsRouter.get("/averageAge", players.getAverageAge);

    // Get average overall by team
    statsRouter.get("/averageOverall", players.getAverageOverall);

    // Get average potential by nationality
    statsRouter.get("/averagePotential", players.getAveragePotential);

    // Get total hits by team
    statsRouter.get("/totalHits", players.getTotalHits);
  
    app.use('/api/players', router);
    app.use('/api/stats', statsRouter);
};