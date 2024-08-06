import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("crud-task-borraralentregar","root","", 
    {host:"", dialect:"mysql"})

    const TaskModel = sequelize.define('task', {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      dueDate: {
          type: DataTypes.DATEONLY,
          allowNull: true
      }
  });

  export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};