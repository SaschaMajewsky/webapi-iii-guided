module.exports = gate;

function gate(req, res, next) {
  const password = req.headers.password;

  if (password && password === 'mellon') {
    next();
  } else {
    next('You shall not pass'); // go to next error handling middleware
  }
}
