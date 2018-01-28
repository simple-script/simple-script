const
	beautify = require('js-beautify').js_beautify,
	eslint = require('gulp-eslint'),
	fs = require('fs'),
	gulp = require('gulp'),
	uglify = require('uglify-js');

const
	directories = {
		dist: './dist',
		src: './src',
		test: './test'
	};

gulp
	.task('compile', compile)
	.task('checkCodingStandard', checkCodingStandard)
	.task('watch', function () {
		gulp.watch(directories.watch, ['compile', 'checkCodingStandard']);
	})
	.task('default', ['compile', 'checkCodingStandard', 'watch']);


function compile () {
	const
		importCommentRegularExpression = /\/\/(?:\s+)\@import (\S+)/g,
		fileHeader = "",
		minifiedVersionOptions = {
			output: {
				preamble: fileHeader,
				"ascii_only": true,
				comments: /^!/i,
			},
			compress: {
				"hoist_funs": false,
				loops: false,
				unused: false,
				typeofs: false,
			}
		},
		nonMinifiedVersionOptions = {
			compress: false,
			mangle: false,
			output: {
				comments: /^!|@preserve/i,
				preamble: fileHeader
			}
		},
		beautifier = {
			indent_with_tabs: true,
		};

	let
		wrapperContent = fs.readFileSync('src/wrapper.js', { encoding: 'utf8' }),
		composed = wrapperContent.replace(importCommentRegularExpression, function (fullMatch, filePath) {
			return fs.readFileSync(directories.src + '/' + filePath, { encoding: 'utf8' });
		}),
		composedMinified = uglify.minify(composed, minifiedVersionOptions);

	composed = uglify.minify(composed, nonMinifiedVersionOptions);
	composed = beautify(composed.code, beautifier);
	fs.writeFileSync(directories.dist + '/simple-script.js', composed);
	fs.writeFileSync(directories.dist + '/simple-script.min.js', composedMinified.code);
}


function checkCodingStandard() {
	gulp
		.src([directories.src + '/**/*.js', directories.test + '/**/*.js'])
		.pipe(eslint({
			configFile: '.eslintrc.yml'
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}
