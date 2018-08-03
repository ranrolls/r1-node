let express = require('express'), router = express.Router();
router.get(['/crudForm/mongodb'], (req, res) => {
    let port = req.app.get('port'); // get global set variable served on every route
    // send res to frontend with variables
    res.render('crudForm/mongodb/view',{
        id: 'crudForm-mongodb',
        title: 'crudForm-mongodb page',
        text: '<b>crudForm-mongodb</b>',
        port: port
    });
    // res.send(`<h1>Express Home Page on port : ${port}</h1>`);
});
module.exports = router; // export your module
