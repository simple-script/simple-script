/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * @param {Object|NodeList|Array} items
 * @param {function} callback
 * @returns {iterator}
 */
function iterator(items, callback)
{
	var
		breakLoop,
		iteratorReturnValue = this,
		itemsLength = 0,
		iterator = 0,
		iteratorParameters = {
			isFirst: true,
			isLast: false,
			isOdd: true,
			isEven: false
		};

	if ( !! items.length) {
		itemsLength = items.length;

	} else if (typeof items === 'object') {
		itemsLength = Object.keys(items).length;
	}

	itemsLength --;

	if (isNodeListInstance(items)) {
		for (var key = 0; key <= itemsLength; key++) {
			iteratorStepper();
			breakLoop = processLoopValue(callback(key, items[key], iteratorParameters));

			if (breakLoop) {
				break;
			}
		}

	} else {
		for (var key in items) {
			if ( ! items.hasOwnProperty(key)) {
				continue;
			}

			iteratorStepper();
			breakLoop = processLoopValue(callback(key, items[key], iteratorParameters));

			if (breakLoop) {
				break;
			}
		}
	}

	return iteratorReturnValue;


	function iteratorStepper() {
		if (iterator > 0) {
			iteratorParameters.isFirst = false;

			if (iteratorParameters.isOdd === true) {
				iteratorParameters.isOdd = false;
				iteratorParameters.isEven = true;

			} else if (iteratorParameters.isEven ) {
				iteratorParameters.isOdd = true;
				iteratorParameters.isEven = false
			}

		}

		if (iterator === itemsLength) {
			iteratorParameters.isLast = true;
		}

		iterator ++;
	}


	/**
	 * @param {*} loopReturnValue
	 */
	function processLoopValue(loopReturnValue)
	{
		if (typeof loopReturnValue !== 'undefined') {
			iteratorReturnValue = loopReturnValue;
			return true;
		}

		return false;
	}
}
