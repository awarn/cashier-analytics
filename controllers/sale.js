
import * as Keen from 'keen-js'
import * as KeenTracking from 'keen-tracking'
import * as bluebird from 'bluebird'

/**
 * GET /sale
 * Create a new sale event.
 */
exports.getSale = (req, res, next) => {
	const errors = req.validationErrors();

	if (errors) {
		return res.send(errors);
	}
	
	res.render('sale/do', {
		title: 'Sale done'
	});
};

/**
 * POST /sale
 * Create a new sale event.
 */
exports.postSale = (req, res, next) => {
	//req.assert('user', 'No user provided.').exists();
	//req.assert('value', 'No value provided.').exists();
	//req.assert('currency', 'No currency provided.').exists();
	//req.assert('products', 'No products provided.').exists();

	const errors = req.validationErrors();

	if (errors) {
		return res.send(errors);
	}

	// This is your actual Project ID and Write Key
	var client = new KeenTracking({
		projectId: '59a8529ac9e77c000149f833',
		writeKey: 'BEEC4313CE39E197DA36EB4BC232D470F09E9ACCC121D3F6DBFB331749FEC5EB9F4F3F448270A0C0E17919B03AC0335F2E2130CE3A6405419FE268EF1206C40A2EAFB3F824B7F6DAAF8189FE4F059AD10E5F5604DFE754D623A9C05CE603DA04'
	});

	// Record an event
	client.recordEvent('sale', {
		user: req.user._id,
		value: 112,
		currency: "SEK",
		products: [
			{
				name: "Shoe 10",
				value: 100,
				tags: ["sale", "sale2017", "shoes"]
			},
			{
				name: "Socks: Juniper",
				value: 12,
				tags: ["socks"]
			}
		]
	});

	res.render('sale/do', {
		title: 'Account Management'
	});
};