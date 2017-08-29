const bluebird = require('bluebird');
const User = require('../models/Sale');

/**
 * POST /sale
 * Create a new sale event.
 */
exports.postSale = (req, res, next) => {
  req.assert('user', 'No user provided.').exists();
  req.assert('value', 'No value provided.').exists();
  req.assert('currency', 'No currency provided.').exists();
  req.assert('products', 'No products provided.').exists();

  const errors = req.validationErrors();

  if (errors) {
    return res.send(errors);
  }

  const sale = new Sale({
    user: req.body.user,
    value: req.body.value,
    currency: req.body.currency,
    products: req.body.products,
  });

  user.save((err) => {
		if (err) { return next(err); }
		res.json({
			result: "success"
		})
	});
};