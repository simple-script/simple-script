/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


defineProperty(prototypesSet.dom, 'ready', ready);


/**
 * @preserve
 * @alias Document.prototype.ready
 * @alias DocumentFragment.prototype.ready
 * @param {function} callback
 * @returns {{value: *, type: string}}
 */
function ready(callback)
{
	this.on('DOMContentLoaded', function () {
		callback.call(this);
	});
	return voidStatement();
}
