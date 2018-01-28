/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.global), 'on', on);


/**
 * @preserve
 * @alias Document.prototype.on
 * @alias DocumentFragment.prototype.on
 * @alias Element.prototype.on
 * @alias NodeList.prototype.on
 * @alias Window.prototype.on
 * @param {string} [event]
 * @param {string|function} [selector]
 * @param {function} [callback]
 * @returns {{value: *, type: string}}
 */
function on(event, selector, callback)
{
	var selectorType = typeof selector;

	if (selectorType === 'string') {
		this.addEventListener(event, function (event) {
			if (event.target.is(selector)) {
				callback.call(event.target);
			}
		});

	} else if (selectorType === 'function') {
		// Selector can be callback
		this.addEventListener(event, selector);
	}

	return originalStatement(this);
}
