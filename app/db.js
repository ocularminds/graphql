const Sequelize = require('sequelize')

var db = {}
const cfg = {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false,
}
const sequelize = new Sequelize('graphql', 'root', 'pass', cfg)
let models = [
    require('./models/priorities.js'),
    require('./models/status.js'),
    require('./models/tickets.js'),
    require('./models/users.js'),
];
// Initialize models
models.forEach((model) => {
    const table = model(sequelize, Sequelize)
    db[table.name] = table
})

// Apply associations
Object.keys(db).forEach((key) => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
