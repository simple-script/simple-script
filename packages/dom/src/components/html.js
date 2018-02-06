/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.element, 'html', html);


/**
 * @preserve
 * @alias Element.prototype.html
 * @alias NodeList.prototype.html
 * @param {string|outerHTML} [content]
 * @returns {{value: *, type: string}}
 */
function html(content)
{
	if ( ! content) {
		return immediateStatement(this.innerHTML);
	}

	this.innerHTML = content;
	return originalStatement(this);
}
