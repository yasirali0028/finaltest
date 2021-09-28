const metadata = require('./metadata.json');

async function zedHead(req, res) {
	try {
		let uri;
		if (metadata[`ZedHead #${req.params.id}`]) uri = metadata[`ZedHead #${req.params.id}`];
		else uri = {};
		return res.send(uri);
	} catch (err) {
		console.log(err);
		return res.send({ success: false, data: "Something went wrong" });
	}
}

module.exports = {
	zedHead
};