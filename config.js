var t = require('tcomb');

var Config = t.struct({
  NODE_ENV: t.enums.of(['development', 'production']),
  hostname: t.Str,
  port: t.Num,
  apiEndpoint: t.Str,
  iso: t.maybe(t.Bool),     // default: false
  uglify: t.maybe(t.Bool),  // default: false
  gzip: t.maybe(t.Bool),    // default: false
  title: t.Str,
  remote: t.maybe(t.Bool),  // default: false
  eslint: t.maybe(t.Bool),  // default: false
  devTool: t.maybe(t.enums.of(['eval', 'source-map'])), // default: source-map
  username: t.maybe(t.Str), // default: undefined (ignored)
  password: t.maybe(t.Str), // default: undefined (ignored)
  debug: t.maybe(t.Str),    // default: undefined (no debug)
  localStringLengthMultiplier: t.maybe(t.Num) // default: undefined (ignored, behaves as === 1)
}, 'Config');

var configJson = require('./config.json');
module.exports = Config(configJson);
