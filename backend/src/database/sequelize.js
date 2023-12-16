const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "msch13",
    password: "user13",
    database: "test"
})

async function checkDataBase(){
    try{
        await sequelize.authenticate();
        console.log('success')
    }catch(err){
        console.error(err)
    }
}

checkDataBase()

module.exports = sequelize;