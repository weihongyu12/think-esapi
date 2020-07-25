// ava.config.js
// https://github.com/avajs/ava/blob/master/docs/06-configuration.md

export default {
  files: [
    'test/**/*.js'
  ],
  require: [
    '@babel/register'
  ],
  babel: {
    testOptions: {
      presets: [
        ['module:@ava/babel/stage-4', {'modules': true}]
      ]
    }
  }
};
