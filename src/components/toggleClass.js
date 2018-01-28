/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'toggleClass', toggleClass);


/**
 *
 * @alias Element.prototype.toggleClass
 * @alias NodeList.prototype.toggleClass
 * @param {string} className
 * @returns {{value: *, type: string}}
 */
function toggleClass(className)
{
	var
		classesToAdd = '',
		classesToRemove = '',
		element = this;

	className.split(' ').each(function (key, classToToggle) {
		classToToggle = ' ' + classToToggle;
		if (element.hasClass(classToToggle)) {
			classesToRemove += classToToggle;

		} else {
			classesToAdd += classToToggle;
		}
	});

	element.removeClass(classesToRemove);
	element.addClass(classesToAdd);

	return originalStatement(this);
}
