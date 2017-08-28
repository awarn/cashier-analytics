/**
 * GET /working
 * 
 */
exports.index = (req, res) => {
  res.render('work/working', {
    title: 'Working'
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
