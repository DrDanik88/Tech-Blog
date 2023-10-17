const Sequelize = require('sequelize');
require('dotenv').config();

const connectionString = process.env.JAWSDB_URL;
// Create a Sequelize instance using the connection string
const sequelize = new Sequelize(connectionString);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;














/*const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            port: 3306
        }
    );
}
async function authTest () {
    await sequelize.authenticate();
    console.log("JawsDB connected successfully");
}

authTest ();
*/

module.exports = sequelize;