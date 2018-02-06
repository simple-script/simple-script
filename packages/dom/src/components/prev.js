/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'prev', prev);


/**
 * @preserve
 * @alias Element.prototype.prev
 * @alias NodeList.prototype.prev
 * @returns {{value: *, type: string}}
 */
function prev()
{
	return immediateStatement(this.previousElementSibling);
}
