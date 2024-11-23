const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const router = express.Router();

router.post('/register', async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await Users.findOne({where: {email}});
        if (existingUser) {
            return res.status(400).json({error: 'Podany adres email jest już zajęty'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({email, password: hashedPassword});
        res.status(201).json({id: user.id});
    } catch (error) {
        res.status(500).json({error: 'Błąd podczas dodawania użytkowanika'});
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await Users.findOne({where: {email}});
        if (!user) {
            return res.status(401).json({error: 'Nieprawidłowy email lub hasło'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({error: 'Nieprawidłowy email lub hasło'});
        }

        res.json({message: 'Zalogowano poprawnie'});
    } catch (error) {
        res.status(500).json({error: 'Błąd podczas logowania'});
    }
});

module.exports = router;
