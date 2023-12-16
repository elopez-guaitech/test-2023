import { Sequelize } from "sequelize";

const db = new Sequelize('dbreact', 'voidloop', 'react', {
        host: 'localhost',
        dialect: 'mysql'
})

export default db