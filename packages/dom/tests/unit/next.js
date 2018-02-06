/*
 * This file is part of the Simple Script framework package.
 *
 * (c) Vladimír Macháček <8machy@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


QUnit.test('Next', function (assert) {
	newElement('div', 2);
	assert.ok(getWorkspace().find('.el-1').next().hasClass('el-2'));
});
