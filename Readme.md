# ractive-loader for [webpack]

Exports a [Ractive] template as a compiled template for [webpack].

## Usage

[Documentation: using loaders](http://webpack.github.io/docs/using-loaders.html)

## Quick start guide

Install this into your project:

    $ npm install --save ractive-loader

Make all your `.html` files compile down to [Ractive] templates by 
modifying your `webpack.config.js` file:

```js
/* webpack.config.js */
module.exports = {
  module: {
    loaders: [
      { test: /\.html$/, loader: 'ractive' }
    ]
  },
  ...
};
```

Then use your Ractive templates via `require()`:

```js
new Ractive({
  template: require('./mytemplate.html')
});
```

## Alternate usage

You can also use it without modifying your config. Just explicitly call it on 
your `require()` call via a prefix:

```js
new Ractive({
  template: require('ractive!./mytemplate.html')
});
```

License
-------

© 2014, Rico Sta. Cruz. Released under the [MIT License].

[MIT License]: http://www.opensource.org/licenses/mit-license.php

 * [My website](http://ricostacruz.com) (ricostacruz.com)
 * [Twitter](http://twitter.com/rstacruz) (@rstacruz)

> Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
>
> The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Ractive]: http://www.ractivejs.org
[webpack]: http://webpack.github.io/
