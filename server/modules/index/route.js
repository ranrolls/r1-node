let nodeVars = require('../../config/nodeVariable');
let express = nodeVars.tools.express, router = express.Router();
router.get(['/', '/index'], (req, res) => {
    return res.redirect("/login");
});
module.exports = router; // export your module
