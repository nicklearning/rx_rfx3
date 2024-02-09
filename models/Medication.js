const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); // Import the User model
class Medication extends Model {


}

Medication.init(
    {
        medicationName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strength: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
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