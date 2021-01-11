const app = require('./app');
const logger = require('./utils/logger');
const port = process.env.PORT || 7000;

// listen to port 7000 by default
app.listen(port, () => {
  logger.info(`The server is runing at port:${port}`);
}); 

