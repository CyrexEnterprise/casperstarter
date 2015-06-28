'use strict';

/* Balance processes */
module.exports = {
	release: ['concat', 'copy:release', 'uglify'],
	staging: ['less:staging', 'copy:staging'],
	test: ['jshint']
}