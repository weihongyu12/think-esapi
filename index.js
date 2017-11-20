const ESAPI = require('./lib/esapi');

/**
 * extends to think, controller, context
 */
module.exports = {
  controller: {
    esapi: new ESAPI()
  },
  context: {
    esapi: new ESAPI()
  },
  think: {
    esapi: new ESAPI()
  }
};
