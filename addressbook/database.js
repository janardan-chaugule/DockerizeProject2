const Sequelize = require('sequelize');
//const fs = require('fs');

console.log('process.env');
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log('process.env');

// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', process.env.DB_HOST, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

fs.appendFile('newfile.txt', process.env.DB_NAME, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

  fs.appendFile('newfile.txt', process.env.DB_PASSWORD, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

const sequelize = new Sequelize(process.env.DB_NAME || 'semaphore',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || 'secrect',
                                {
                                    host: process.env.DB_HOST|| 'localhost',
                                    port: process.env.DB_PORT || 4324,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
module.exports = {
    sequelize: sequelize,
    Person: Person
};
