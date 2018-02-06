/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/* eslint-disable no-useless-call */

defineProperty(prototypesSet.element, 'is', is);


/**
 * @preserve
 * @alias Element.prototype.is
 * @alias NodeList.prototype.is
 * @param {string|Element} selector
 * @returns {{value: *, type: string}}
 */
function is(selector)
{
	var is;

	if (selector === ':checked') {
		var inputsAllowedToCheck = ['checkbox', 'radio'];
		is = this.is('input') && inputsAllowedToCheck.indexOf(this.type) && this.checked;

	} else if (selector === ':selected') {
		is = this.is('option') && this.selected;

	} else {
		is = this.matches.call(this, selector);
	}

	return immediateStatement(is);
}
