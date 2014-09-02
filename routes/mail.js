/*
 * GET users listing.
 */

exports.edit = function(req, res) {
	console.log(req.path)
	res.send("respond with a resource " + req.path);
};
