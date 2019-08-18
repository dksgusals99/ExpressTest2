const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/:id', (req, res, next) => {
    filePath = path.join(__dirname, '../views', req.params.id);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
    });
});

module.exports = router;