/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'offset', offset);


/**
 * @preserve
 * @alias Element.prototype.offset
 * @alias NodeList.prototype.offset
 * @returns {{value: *, type: string}}
 */
function offset()
{
	return immediateStatement(this.getBoundingClientRect());
}
