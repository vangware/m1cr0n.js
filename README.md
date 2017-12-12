# micron.js

[![[Micron logo]](https://cdn.rawgit.com/vangware/micron/master/logo.svg)](https://vangware.com)

[![[Build Status]](https://img.shields.io/travis/vangware/micron.svg?style=flat-square)](https://travis-ci.org/vangware/micron)

Standalone helper arrow functions (ES6) in 1 line. Useful for code injection, bookmarklets, debugging, etc.

```javascript
ael(); // Listen to several events on an element or a group of elements.
atr(); // Set several attributes of an element or a group of elements.
cks(); // Get the current document cookies in object form.
css(); // Set several styles of an element or a group of elements.
del(); // Remove an element or a group of elements from the DOM.
dom(); // Parse string into DOM.
get(); // Alias for querySelectorAll, but returning an array instead of a nodeList.
mrx(); // Takes a string and an object and makes a regex map replace.
obj(); // Creates a clean object with a forEach method.
pad(); // Add padding zeros to passed number.
rnd(); // Random string generator (up to 10 characters).
tsh(); // Timestamp string hash generator (up to 8 characters).
url(); // Parse an object into a simple string in URL format for XHR.
xhr(); // Alias for new XMLHttpRequest, with GET method by default.
```

Check [the documentation](DOCUMENTATION.md) for more details.
