let express = require('express'), router = express.Router();
router.get(['/crudForm/file'], (req, res) => {
    let fileService = require('../../../services/fileSystem/core');
    let port = req.app.get('port'); // get global set variable served on every route
    // send res to frontend with variables
    res.render('crudForm/file/view', {
        id: 'crudForm-file',
        title: 'crudFormFile page',
        text: '<b>crudFormFile</b>',
        data: JSON.stringify(fileService.getAll()),
        port: port
    });
    // res.send(`<h1>Express Home Page on port : ${port}</h1>`);
});
module.exports = router; // export your module
