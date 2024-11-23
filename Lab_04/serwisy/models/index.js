const { Sequelize } = require('sequelize');

// Konfiguracja bazy danych SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Plik bazy danych SQLite
  logging: false, // Wyłącz logowanie zapytań SQL
});

// Eksportowanie instancji Sequelize
module.exports = sequelize;
