module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
      player_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      overall: {
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      hits: {
        type: Sequelize.INTEGER
      },
      potential: {
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      }
    },
    {
        timestamps: false,
        tableName: 'mytable'
    }
    );
  
    return Player;
};