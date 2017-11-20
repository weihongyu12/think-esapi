import test from 'ava';
import ESAPI from '../index';

test('esapi', t => {
  const esapi = ESAPI;
  t.is(typeof esapi, 'object');
});

test('encodeForHTML', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForHTML('< > " \' / &');
  t.is(encode, '&lt; &gt; &quot; &#x27; &#x2f; &amp;');
});

test('encodeForCSS', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForCSS('[space] % * + , - / ; < = > ^ and |. Also, the </style>');
  t.is(encode, '\\5b space\\5d \\20 \\25 \\20 \\2a \\20 \\2b \\20 \\2c \\20 \\2d \\20 \\2f \\20 \\3b \\20 \\3c \\20 \\3d \\20 \\3e \\20 \\5e \\20 and\\20 \\7c \\2e \\20 Also\\2c \\20 the\\20 \\3c \\2f style\\3e ');
});

test('encodeForJS', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForJS('[space] % * + , - / ; < = > ^ and |. Also, a </script>');
  t.is(encode, '\\x5Bspace\\x5D\\x20\\x25\\x20\\x2A\\x20\\x2B\\x20,\\x20\\x2D\\x20\\x2F\\x20\\x3B\\x20\\x3C\\x20\\x3D\\x20\\x3E\\x20\\x5E\\x20and\\x20\\x7C.\\x20Also,\\x20a\\x20\\x3C\\x2Fscript\\x3E');
});

test('encodeForURL', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForURL('[space] % * + , - / ; < = > ^ and |. Also, the </style>');
  t.is(encode, '%5Bspace%5D%20%25%20*%20+%20%2C%20-%20/%20%3B%20%3C%20%3D%20%3E%20%5E%20and%20%7C.%20Also%2C%20the%20%3C/style%3E');
});

test('encodeForHTMLAttribute', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForHTMLAttribute(' % * + , - / ; < = > ^ and |');
  t.is(encode, ' &#x25; &#x2a; &#x2b; , - &#x2f; &#x3b; &lt; &#x3d; &gt; &#x5e; and &#x7c;');
});

test('encodeForBase64', t => {
  const esapi = ESAPI.think.esapi;
  const encode = esapi.encodeForBase64('[space] % * + , - / ; < = > ^ and |. Also, a </script>');
  t.is(encode, 'W3NwYWNlXSAlICogKyAsIC0gLyA7IDwgPSA+IF4gYW5kIHwuIEFsc28sIGEgPC9zY3JpcHQ+');
});

test('context', t => {
  const esapi = ESAPI.context.esapi;
  const encode = esapi.encodeForHTML('< > " \' / &');
  t.is(encode, '&lt; &gt; &quot; &#x27; &#x2f; &amp;');
});

test('controller', t => {
  const esapi = ESAPI.controller.esapi;
  const encode = esapi.encodeForHTML('< > " \' / &');
  t.is(encode, '&lt; &gt; &quot; &#x27; &#x2f; &amp;');
});
