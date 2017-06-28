const path = require('path')
const fs = require('fs')
const dot = require('dot')

var render;

module.exports = function renderSingleton(data) {
	if (!render) {
		var file = fs.readFileSync('./fortune-teller.html', 'utf8');
		render = dot.template(file, null, {});
	}
	return render;
};

