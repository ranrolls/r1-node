let nodeVars = require('../../config/nodeVariable');
let express = nodeVars.tools.express, router = express.Router();
router.get('/login', (req, res) => {
    // send res to frontend with variables
    res.render('login',{
        id: 'index',
        title: 'index page',
        text: '<b>Bold Text</b>',
    });
    // res.send('login server route');
});
module.exports = router;