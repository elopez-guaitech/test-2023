import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Taskmodel = db.define('task',
        {
                title : {type: DataTypes.STRING},
                enable : {type: DataTypes.BOOLEAN},
        }
)

export default Taskmodel