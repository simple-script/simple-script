/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'text', text);


/**
 * @preserve
 * @alias Element.prototype.test
 * @alias NodeList.prototype.text
 * @param {string} content
 * @returns {{value: *, type: string}}
 */
function text(content)
{
	if ( ! content) {
		return immediateStatement(this.textContent);
	}

	this.textContent = content;
	return originalStatement(this);
}
