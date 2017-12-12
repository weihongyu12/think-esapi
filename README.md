# think-esapi

[![npm](https://img.shields.io/npm/v/think-esapi.svg)](https://www.npmjs.com/package/think-esapi)
[![Build Status](https://travis-ci.org/weihongyu12/think-esapi.svg?branch=master)](https://travis-ci.org/weihongyu12/think-esapi)
[![Coverage Status](https://coveralls.io/repos/github/weihongyu12/think-esapi/badge.svg?branch=master)](https://coveralls.io/github/weihongyu12/think-esapi?branch=master)

An ESAPI(Enterprise Security API) extend for ThinkJS

## How to use

### Install

```bash
npm install think-esapi --save
```

### Configure extends.js
```javascript
const esapi = require('think-esapi')

module.exports = [
  esapi
];
```

## Method

- <code>this.encodeForHTML(data)</code>
- <code>this.encodeForCSS(data)</code>
- <code>this.encodeForJS(data)</code>
- <code>this.encodeForURL(data)</code>
- <code>this.encodeForHTMLAttribute(data)</code>
- <code>this.encodeForBase64(data)</code>
