import passport from 'passport'


function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.flash('error', 'Please login')
    res.redirect('/admin/login')
  }
}

export default ensureAuth
