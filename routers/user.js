const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Router Test User');
});

module.exports = router;