const {DataTypes} = require('sequelize');
const sequelize = require('./index');

// Definicja modelu Books
const Books = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Automatyczne zwiększanie ID
        primaryKey: true,    // Główne pole klucza
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'books',      // Nazwa tabeli w bazie danych
    timestamps: false,       // Nie dodawaj pól "createdAt" i "updatedAt"
});

module.exports = Books;