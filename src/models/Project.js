import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from './task.js'

// Esquema de la tabla projects
export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }, 
    priority:{
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
})

// Relacion uno a muchos (hasMany)
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

// Relacion uno a uno
Task.belongsTo(Project, {
    foreignKey: 'projectId',
    TargetId: 'id'
})