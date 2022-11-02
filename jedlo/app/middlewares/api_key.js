
module.exports = (req, res, next) => {
	apiKey = req.get('x-api-key');
	if(apiKey == process.env.API_KEY){
		next();
	}else{
		res.status(401).json({
			success: false,
			message: "Unauthorized"
		});
	}
}
