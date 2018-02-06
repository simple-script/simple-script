/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.global), 'off', off);

/**
 * @preserve
 * @alias Document.prototype.off
 * @alias DocumentFragment.prototype.off
 * @alias Element.prototype.off
 * @alias NodeList.prototype.off
 * @alias Window.prototype.off
 * @param {string} event
 * @param {function} listener
 * @param {boolean} [useCapture]
 * @returns {{value: *, type: string}}
 */
function off(event, listener, useCapture)
{
	this.removeEventListener(event, listener, ! useCapture);
	return originalStatement(this);
}
