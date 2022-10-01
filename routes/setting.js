const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {    
    // return status 200 with settings page
    res.status(200).render('setting');
});

module.exports = router;
