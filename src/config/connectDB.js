
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('d961gdar9j9u3u', 'uurmdktbfyluav',
 "24ef65561c7f6671b50e9f89ab1b4df0f2faf80880a815a5c6e75faa042ec91b", {
    host: 'ec2-176-34-105-15.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    }
  });

  let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
module.exports = connectDB;