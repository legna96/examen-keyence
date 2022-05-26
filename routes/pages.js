const express = require('express');
const { render } = require('express/lib/application');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/index.html'));
})

module.exports = router;