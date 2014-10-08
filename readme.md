# grunt-require-wiredep
>Inject require configuration into your source code with Grunt.*

## What is this?
[Grunt](http://gruntjs.com) is great.

`grunt-require-wiredep` is a Grunt plug-in, which finds your configuration and injects them directly into the js file you specify.


## Getting Started

*If you are new to Grunt, you will find a lot of answers to your questions in their [getting started guide](http://gruntjs.com/getting-started).

To install the module:
```
npm install --save-dev grunt-require-wiredep
```

Include the task in your Gruntfile:
```js
grunt.loadNpmTasks('grunt-require-wiredep');
```

Create a config block within your Gruntfile:
```js
requireWiredep: {

  target: {

    // Point to the files that should be updated when
    // you run `grunt require-wiredep`
    src: [
      'app/views/**/*.js',   // .js support...
    ],

    // Optional:
    // ---------
	options: {
      cwd: '',
      fileTypes: '',
      requireUrl: './UrlToConfig.js',
      requireConfig: {
          // There can be passed config instead file
        }
	}
  }
}
```

*See [require-wiredep readme](https://github.com/Krzysztof-Padol/require-wiredep) for more options of customization, such as other file types, regex patterns, exclusions, and more. 
Options can be specified on both task and target level. See [grunt documentation](http://gruntjs.com/configuring-tasks#options) for more details on how this works.*

To inject configuration, pop this in your js file:
```js
//require:target
//endrequire
```

Call the Grunt task:
```
grunt require-wiredep
```
## License
Copyright (c) 2014 Pearson English
Licensed under the MIT license.