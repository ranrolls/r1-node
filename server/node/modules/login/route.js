let express = require('express');
let router = express.Router();
let nodeVars = require('../../config/nodeVariable');
router.get('/login', (req, res) => {
    // send res to frontend with variables
    res.render('login/view',{
        id: 'login',
        title: 'login page',
        text: '<b>Bold Text</b>',
        ngAppPath: nodeVars.modules.login.ngAppPath,
    });
});
router.get('/login/api', (req, res) => {
    res.json({
        one: "one"
    });
});
module.exports = router;