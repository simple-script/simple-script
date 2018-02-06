/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'removeAttr', removeAttr);


/**
 * @preserve
 * @alias Element.prototype.removeAttr
 * @alias NodeList.prototype.removeAttr
 * @param {string} attributeName
 * @returns {{value: *, type: string}}
 */
function removeAttr(attributeName)
{
	var element = this;

	attributeName.split(' ').each(function (key, attribute) {
		element.removeAttribute(attribute);
	});

	return originalStatement(element);
}
