const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected successfully.');

        await db.sequelize.sync({ alter: false });
        console.log('All models were synchronized successfully.');

    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}
module.exports = connectDatabase;