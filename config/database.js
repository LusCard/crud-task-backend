import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("tasks_db","root","", 
    {host:"", dialect:"mysql"})

export const TaskModel = sequelize.define('task', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      state: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
      }
  }
 ,{
    timestamps: false,
});

  export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // await sequelize.sync({force: false});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};