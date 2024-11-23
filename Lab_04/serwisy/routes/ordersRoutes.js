const express = require('express');
const Orders = require('../models/Orders');
const {where} = require("sequelize");
const Books = require("../models/Books");

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const orders = await Orders.findAll({where: {userId: req.params.id}})
        res.json(orders)
    } catch (error) {
        res.status(500).json({error: 'Błąd podczas pobierania zamówień klienta'})
    }
})

router.post('/', async (req, res) => {
    const {userId, bookId, quantity} = req.body;
    try {
        const book = await Books.findByPk(bookId);
        if (!book) {
            return res.status(404).json({error: 'Brak książki o podanym id w bazie'});
        }
        const order = await Orders.create({userId, bookId, quantity});
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({error: 'Błąd podczas tworzenia zamówienia'});
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rowsDeleted = await Orders.destroy({ where: { id } });
        if (rowsDeleted === 0) {
            return res.status(404).json({ error: 'Brak zamówienia o podanym id w bazie' });
        } else {
            res.status(204).json({message: "Zamówienie zostało usunięte"});
        }
    } catch (error) {
        res.status(500).json({ error: 'Błąd podczas usuwania zamówienia' });
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const {bookId, quantity} = req.body;
    try {
        const order = await Orders.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Brak zamówienia o podanym id w bazie' });
        }
        order.bookId = bookId;
        order.quantity = quantity;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Błąd podczas aktualizowania zamówienia' });
    }
});

module.exports = router