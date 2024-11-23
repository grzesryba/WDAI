const {DataTypes} = require('sequelize')
const sequalizer = require('./index')

const Orders = sequalizer.define("Orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Automatyczne zwiększanie ID
        primaryKey: true,    // Główne pole klucza
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
        },
    },
}, {
    timestamps: false,
})

module.exports = Orders