import passport from 'passport'

const adminLogin = {}

adminLogin.get = (req, res) => {
  res.render('admin_login')
}

adminLogin.post = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    // failureFlash: true
  })(req, res, next)
}

export default adminLogin
