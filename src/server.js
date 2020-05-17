const server = require('./app');

server.listen(process.env.PORT || 4000, () => console.log('server on'));
