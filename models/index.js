const User = require('./User');
const Medication = require('./Medication');

User.hasMany(Medication, {
    foreignKey: 'user_id', // Foreign key in the Medication model referencing the User model
    onDelete: 'CASCADE', // If a user is deleted, delete associated medications
});
Medication.belongsTo(User, {
    foreignKey: 'user_id', // Foreign key in the Medication model referencing the User model
});


module.exports = { User, Medication };
