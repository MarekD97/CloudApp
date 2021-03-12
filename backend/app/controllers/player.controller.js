const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: players } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, players, totalPages, currentPage };
};

// Create and Save a new Player
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Player
    const player = {
        name: req.body.name,
        nationality: req.body.nationality,
        position: req.body.position,
        overall: req.body.overall,
        age: req.body.age,
        hits: req.body.hits,
        potential: req.body.potential,
        team: req.body.team
    };

    // Save Player in the database
    Player.create(player)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Player."
        });
        });
};

// Retrieve all Player from the database.

exports.findAll = (req, res) => {
  let { page, size, name } = req.query;
  if (page === undefined) page = 0;
  if (size === undefined) size = 20;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  Player.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players."
      });
    });
};

//OLD findAll
/*
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Player.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving players."
        });
        });
};
*/

// Find a single Player with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Player.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Player with id=" + id
        });
      });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Player.update(req.body, {
      where: { player_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Player was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Player with id=" + id
        });
      });
};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Player.destroy({
      where: { player_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Player was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Player with id=" + id
        });
      });
};

// Delete all Players from the database.
exports.deleteAll = (req, res) => {
    Player.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Players were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all players."
          });
        });
};

// Find all published Players
/*
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Players."
      });
    });
};
*/