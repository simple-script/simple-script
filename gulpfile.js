const
	beautify = require('js-beautify').js_beautify,
	eslint = require('gulp-eslint'),
	fs = require('fs'),
	gulp = require('gulp'),
	uglify = require('uglify-js'),
	util = require('gulp-util');

const
	directories = {
		packages: __dirname + '/packages',
	},
	minifiedVersionsConfiguration = {
		output: {
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
	nonMinifiedVersionsConfiguraton = {
		compress: false,
		mangle: false,
		output: {
			comments: /^!|@preserve/i
		}
	},
	beautifierConfiguration = {
		indent_with_tabs: true,
	},
	filesEncoding = { encoding: 'utf8' },
	packages = {
		dom: {
			directories: {
				dist: directories.packages + '/dom/dist',
				src: directories.packages + '/dom/src',
				test: directories.packages + '/dom/test',
			},
			tasks: {}
		},

		frontendLogger: {
			directories: {
				dist: directories.packages + '/frontend-logger/dist',
				src: directories.packages + '/frontend-logger/src'
			},
			tasks: {}
		}
	};

packages.dom.tasks.compile = function () {
	const importCommentRegularExpression = /\/\/(?:\s+)\@import (\S+)/g;

	let
		wrapperContent = fs.readFileSync(packages.dom.directories.src + '/wrapper.js', filesEncoding),
		composed = wrapperContent.replace(importCommentRegularExpression, function (fullMatch, filePath) {
			return fs.readFileSync(packages.dom.directories.src + '/' + filePath, filesEncoding);
		}),
		composedMinified = uglify.minify(composed, minifiedVersionsConfiguration);

	composed = uglify.minify(composed, nonMinifiedVersionsConfiguraton);
	composed = beautify(composed.code, beautifierConfiguration);
	fs.writeFileSync(packages.dom.directories.dist + '/dom.js', composed);
	fs.writeFileSync(packages.dom.directories.dist + '/dom.min.js', composedMinified.code);
};


packages.frontendLogger.tasks.compile = function () {
	let filesWithoutExtension = [
		'logger',
		'modules/simple-error-logger'
	];

	for (var fileWithoutExtensionKey in filesWithoutExtension) {
		let
			fileWithoutExtension = filesWithoutExtension[fileWithoutExtensionKey],
			fileName = packages.frontendLogger.directories.src + '/' + fileWithoutExtension + '.js',
			fileContent;

		if ( ! fs.existsSync(fileName)) {
			throw new util.PluginError({
				plugin: 'Frontend logger compilation',
				message: 'File ' + fileName + ' not found.'
			});
		}

		fileContent = fs.readFileSync(fileName, filesEncoding);
		fileContent = beautify(fileContent, beautifierConfiguration);
		fs.writeFileSync(packages.frontendLogger.directories.dist + '/' + fileWithoutExtension + '.js', fileContent);

		fileContent = uglify.minify(fileContent, nonMinifiedVersionsConfiguraton);
		fs.writeFileSync(packages.frontendLogger.directories.dist + '/' + fileWithoutExtension + '.min.js', fileContent.code);
	}
};


function checkCodingStandard() {
	gulp
		.src([
			packages.frontendLogger.directories.src + '/**/*.js',
			packages.dom.directories.src + '/**/*.js',
			packages.dom.directories.test + '/**/*.js'
		])
		.pipe(eslint({
			configFile: '.eslintrc.yml'
		}))
		.pipe(eslint.formatEach())
		.pipe(eslint.results(results => {
			// Called once for all ESLint results.
			console.log(`Total Results: ${results.length}`);
			console.log(`Total Warnings: ${results.warningCount}`);
			console.log(`Total Errors: ${results.errorCount}`);
		}))
		.pipe(eslint.failAfterError());
}


gulp
	.task('compileDomPackage', packages.dom.tasks.compile)
	.task('compileFrontendLoggerPackage', packages.frontendLogger.tasks.compile)
	.task('checkCodingStandard', checkCodingStandard);
