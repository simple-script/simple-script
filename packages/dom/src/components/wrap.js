/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'wrap', wrap);


/**
 * @preserve
 * @alias Element.prototype.wrap
 * @alias NodeList.prototype.wrap
 * @param {Element} wrapper
 * @returns {{value: *, type: string}}
 */
function wrap(wrapper)
{
	this.parent().replaceChild(wrapper.html(this.outerHTML), this);
	return originalStatement(this);
}
