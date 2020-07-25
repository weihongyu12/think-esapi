/**
 * @author weihongyu<weihongyu12@outlook.com>
 * @version 1.1.4
 */

const esapi = require('node-esapi');

class ESAPI {
  constructor() {
    this.esapi = esapi.encoder();
  }

  /**
   * Encode HTML
   * @param {string} data
   */
  encodeForHTML(data) {
    return this.esapi.encodeForHTML(data);
  }

  /**
   * Encode CSS
   * @param {string} data
   */
  encodeForCSS(data) {
    return this.esapi.encodeForCSS(data);
  }

  /**
   * Encode JS
   * @param {string} data
   */
  encodeForJS(data) {
    return this.esapi.encodeForJavaScript(data);
  }

  /**
   * Encode URL
   * @param {string} data
   */
  encodeForURL(data) {
    return this.esapi.encodeForURL(data);
  }

  /**
   * Encode HTML Attribute
   * @param {string} data
   */
  encodeForHTMLAttribute(data) {
    return this.esapi.encodeForHTMLAttribute(data);
  }

  /**
   * Encode Base64
   * @param {string} data
   */
  encodeForBase64(data) {
    return this.esapi.encodeForBase64(data);
  }
}

module.exports = ESAPI;
