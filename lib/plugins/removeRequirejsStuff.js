var cheerio = require('cheerio');


module.exports = {
    beforeSend: function(req, res, next) {
    	if(!req.prerender.documentHTML) {
    		return next();
    	}
		
		var $ = cheerio.load(req.prerender.documentHTML);

		// Lets remove requirejs stuff
		$("script[data-requiremodule]").remove();
		req.prerender.documentHTML = $.html();

        next();
    }
};
