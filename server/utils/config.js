class Config{
	
	constructor(app){
		
		app.set('view engine', 'html');
		app.use(require('express').static(require('path').join('dist')));

	}
}
module.exports = Config;