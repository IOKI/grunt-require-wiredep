'use strict';

function requireWiredep(grunt) {
  grunt.registerMultiTask('requireWiredep', 'Inject require config into your source code.', function () {
    this.requiresConfig(['requireWiredep', this.target, 'src']);
	// Extend the options object with the entire data object (instead of just .src) for backward compatibility.
    require('require-wiredep')(this.options(this.data));
  });
}

module.exports = requireWiredep;
