const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    const path = req.headers.host + req.url
    res.status(404).send(`Sorry cant find ${path}!`);
});

router.use(function (err, req, res, next) {
    console.log(err);
});

module.exports = router;
