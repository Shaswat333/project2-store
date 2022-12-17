// checks if the user is logged in when trying to access a page
module.exports = (req,res,next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }
  next();
};
