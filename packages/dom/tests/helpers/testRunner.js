/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * @param {number} id
 * @returns {NodeList}
 */
function getTestElement(id) {
	return getWorkspace().find('.el-' + id);
}


/**
 * @returns {Element}
 */
function getWorkspace()
{
	return document.find('#qunit-fixture');
}


/**
 * @param {string} name
 * @param {number} [count]
 * @returns {Element}
 */
function newElement(name, count)
{
	if ( !! count) {
		for (var i = 1; i <= count; i++) {
			getWorkspace().append(document.createElement(name).addClass('el-' + i));
		}

	} else {
		return document.createElement(name);
	}
}