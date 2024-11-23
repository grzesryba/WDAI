const express = require('express');
const sequelize = require('./models/index');
const Books = require('./models/Books');
const Orders = require('./models/Orders');
const Users = require('./models/Users');
const booksRoutes = require('./routes/booksRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/books', booksRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api', usersRoutes);

sequelize.sync({force: false}).then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}).catch(error => console.log('Error syncing database:', error));
