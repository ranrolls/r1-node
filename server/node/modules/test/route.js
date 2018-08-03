let express = require('express');
let router = express.Router();

router.get('/urlParam/:p', (req, res) => {
    var p1 = req.params.p;
    res.send(`<h1> ${p1} </h1>`);
})

module.exports = router;