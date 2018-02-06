/*! Copyright (c) Vladimír Macháček | BSD-3-Clause | https://github.com/simple-script/simple-script */

(function() {
	window.addEventListener('error', function(error) {

		var
			browser = typeof navigator.userAgent === 'undefined' ? 'undefined' : navigator.userAgent,
			date = new Date(),
			timeDMY = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear(),
			timeHMS = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

		var log = [
			'[' + timeDMY + ' ' + timeHMS + ']',
			'Message: ' + error.message,
			'URL: ' + window.location.href,
			'File: ' + error.filename,
			'Line: ' + error.lineno,
			'Browser:' + browser
		].join(' - ');

		FrontendLogger.addLog('simpleErrorLogger', log);
	});

})();