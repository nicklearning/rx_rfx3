const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); // Import the User model
class Medication extends Model {


}

Medication.init(
    {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inUse: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        monday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        tuesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        wednesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        thursday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        friday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        saturday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        sunday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Oral'
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'medication',
    }
);

module.exports = Medication;