/*!
 * jQuery JavaScript Library v@VERSION (No DOM)
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: @DATE
 */
(function( window, undefined ) {

// Fake the minimal browser API required by jQuery so that we can use a subset of jQuery in DOM-less contexts
window = window || this;
window.document = window.document || {};

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
