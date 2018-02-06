/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element.concat(prototypesSet.iterable), 'eq', eq, true);


/**
 * @preserve
 * @alias Array.prototype.eq
 * @alias Element.prototype.eq
 * @alias NodeList.prototype.eq
 * @alias Object.prototype.eq
 * @param {number} index
 * @param {boolean} [fromEnd]
 * @returns {{value: *, type: string}}
 */
function eq(index, fromEnd)
{
	if (this instanceof Element) {
		return this;
	}

	var isNodeListOrArray = this instanceof Array || this instanceof NodeList;

	if (fromEnd) {
		var length;

		if (isNodeListOrArray) {
			length = this.length;

		} else {
			length = Object.keys(this).length;
		}

		index = length - 1 - index;
	}

	if ( ! isNodeListOrArray) {
		index = Object.keys(this)[index];
	}

	return immediateStatement(this[index]);
}
