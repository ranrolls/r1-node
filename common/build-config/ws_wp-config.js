const serve = require('webpack-serve');
const argv = {};
const config = require('./wp-config.js');

serve(argv, { config }).then((server) => {
    // server.on('listening', ({ server, options }) => {
    //   console.log('happy fun time');
    // });
});