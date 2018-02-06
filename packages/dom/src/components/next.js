/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'next', next);


/**
 * @preserve
 * @alias Element.prototype.next
 * @alias NodeList.prototype.next
 * @returns {{value: *, type: string}}
 */
function next()
{
	return immediateStatement(this.nextElementSibling);
}
