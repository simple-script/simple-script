/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'val', val);


/**
 * @preserve
 * @alias Element.prototype.val
 * @alias NodeList.prototype.val
 * @param {string|number} [value]
 * @returns {{value: *, type: string}}
 */
function val(value)
{
	if ( ! value) {
		return immediateStatement(this.value);
	}

	this.value = value;
	return originalStatement(this);
}
