
import * as Keen from 'keen-js'
import * as bluebird from 'bluebird'

/**
 * GET /working
 */
exports.index = (req, res) => {
	const errors = req.validationErrors();

  if (errors) {
    return res.send(errors);
	}

	const client = new Keen({
		projectId: '59a8529ac9e77c000149f833',
		readKey: '8DC5E1CE826E6C58BF2529A83C6ED7C1FAB465EB5F7FCD9D8362C3C9C012FBECE187DB216B71E909E09617734483BAFABF96220CEFFEECCEA9051428561873C7FE9F48C82DCEE5617715E10E75AF6D7167B70CCD4429B6AD65F422647C5ACD65'
	});
	
	// This is your actual Project ID and Write Key
	client
		.query('average', {
			event_collection: 'sale',
			target_property: 'value',
			filters: [
				{
					property_name: 'user',
					operator: 'eq',
					property_value: req.user._id
				}
			],
			timezone: 'Europe/Paris',
			timeframe: 'this_7_days'
		})
		.then(result => {
			res.render('work/working', {
				title: 'Working',
				averageSale: result.result
			});
		})
		.catch(error => {
			console.log(error);
		});
};

/**
 * GET /history
 * 
 */
exports.history = (req, res) => {
  res.render('work/history', {
    title: 'Working'
  });
};
