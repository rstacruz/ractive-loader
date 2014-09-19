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

Thanks
------

[Ractive]: http://www.ractivejs.org
[webpack]: http://webpack.github.io/

**ractive-loader** © 2014+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/ractive-loader/contributors
