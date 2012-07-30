// Copyright Tsung Wu <tsung.bz@gmail.com>
// twitter: @ioNull
// github: http://github.com/ioNull/base64.js
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

//thanks a lot to punycode author: Mathias Bynens (http://mathiasbynes.be)
;(function(root) {

	if (typeof console === 'undefined') {
		console = {
			log: function() {}
		};
	}
	var base64 = {
		encode: function(what) {
			return btoa(unescape(encodeURIComponent(what)));
		},
		decode: function(what) {
			return decodeURIComponent(escape(atob(what)));
		}
	};

	var ioNull = {
		base64: base64
	};

	function extend(a, b) {
		for (var prop in b) {
			if (typeof b[prop] === 'undefined') {
				delete a[prop];
				// Avoid "Member not found" error in IE8 caused by setting window.constructor
			} else if (prop !== 'constructor' || a !== root) {
				a[prop] = b[prop];
			}
		}
		return a;
	};
	if (typeof exports === 'undefined') {
		if (typeof root.ioNull === 'undefined') {
			root.ioNull = ioNull;
		} else {
			extend(root.ioNull, ioNull);
		}
	} else { // 支持exports方式
		extend(exports, ioNull);
	}
})(this);

