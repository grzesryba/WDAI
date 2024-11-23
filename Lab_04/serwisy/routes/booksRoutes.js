const express = require('express');
const Books = require('../models/Books');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Books.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({error: 'Książka o podanym id nie istnieje.'})
        }
    } catch (error) {
        res.status(500).json({error: 'Błąd podczas pobierania książki'})
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, author, year} = req.body;
        const newBooks = await Books.create({name, author, year});
        res.status(201).json(newBooks);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCount = await Books.destroy({ where: { id: req.params.id } });
        if (deletedCount > 0) {
            res.json({ message: 'Książka została usunięta.' });
        } else {
            res.status(404).json({ error: 'Książka o podanym ID nie istnieje.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd podczas usuwania książki.' });
    }
});

module.exports = router;
