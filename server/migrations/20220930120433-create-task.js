'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isDone: {
        field: 'is_done',
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      deadLine: {
        field: 'dead_line',
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'users',
          },
            key: 'id'
          },
          onUpdate: 'restrict',
          onDelete: 'cascade',
        
      },
      
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};