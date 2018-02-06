/*! Copyright (c) Vladimír Macháček | BSD-3-Clause | https://github.com/simple-script/simple-script */

(function() {

	var
		postRequestUrl = null,
		logs = {};


	function addLog(module, data) {
		if (typeof module === 'undefined' || typeof data === 'undefined') {
			return;
		}

		if (!(module in logs)) {
			logs[module] = [];
		}

		logs[module].push(data);
		return this;
	}


	function getLog(module) {
		if (logs.hasOwnProperty(module)) {
			return logs[module];
		}

		return null;
	}


	function sendLog(module, url) {
		if (typeof module !== 'string' || typeof url !== 'string' || !(module in logs)) {
			return;
		}

		var
			request = new XMLHttpRequest(),
			data = new FormData(),
			log = {
				module: module,
				data: logs[module]
			};

		delete logs[module];
		data.append('frontendLogger', JSON.stringify(log));
		request.open("POST", url, true);
		request.send(data);
	}

	window.FrontendLogger = {
		addLog: addLog,
		getLog: getLog,
		sendLog: sendLog
	};

})();