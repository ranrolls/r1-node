let express = require('express'), router = express.Router();
router.get(['/', '/index'], (req, res) => {
    let port = req.app.get('port'); // get global set variable served on every route
    // send res to frontend with variables
    res.render('index/view',{
        id: 'index',
        title: 'index page',
        text: '<b>Bold Text</b>',
        port: port
    });
    // res.send(`<h1>Express Home Page on port : ${port}</h1>`);
});
module.exports = router; // export your module
