import mongoose from 'mongoose'
import Admin from './../models/admin'
import bcrypt from 'bcryptjs'

const adminRegister = {}

adminRegister.get = (req, res) => {
  //TODO: if ya hay admin, res.render /login/
  Admin.find({}, (err, admin) => {
    if (admin.length <= 0) {
      res.render('admin_register')
    } else {
      res.flash('error', 'Ya existe Admin')
      res.redirect('/admin/login')
    }
  })

}

adminRegister.post = (req, res) => {
  const name = req.body.name
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  const password2 = req.body.password2

  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('username', 'Username is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'email is not valid').isEmail()
  req.checkBody('password', 'password is required').notEmpty()
  req.checkBody('password2', 'password do not match').equals(req.body.password)

  let error = req.validationErrors();

  if (error) {
    console.log(error);
    res.flash('errors', 'Errores en los campos')
    res.render('admin_register', {
      error: error
    })
  } else {
    let newAdmin = new Admin({
      name:name,
      username:username,
      email:email,
      password:password
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newAdmin.password, salt, (err, hash) => {
        if (err) {
          console.error(err);
        } else {
          newAdmin.password = hash
          newAdmin.save((err) => {
            if (err) {
              console.error(err);
            } else {
              res.flash('success', "Admin creado")
              res.redirect('/admin/')
            }
          })
        }
      })
    })

  }
}

export default adminRegister
