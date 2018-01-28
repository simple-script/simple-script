/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'hasClass', hasClass);


/**
 * @preserve
 * @alias Element.prototype.hasClass
 * @alias NodeList.prototype.hasClass
 * @param {string} className
 * @returns {{value: *, type: string}}
 */
function hasClass(className)
{
	className = className.trim();

	var
		classList = this.classList,
		result = classList
			? classList.contains(className)
			: this.className.split(' ').indexOf(className) >= 0;

	return immediateStatement(result);
}
