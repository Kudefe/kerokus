import mongoose from 'mongoose'
import Admin from './../models/admin'

const adminLogout = {}

adminLogout.get = (req, res) => {
  console.log("deslogueando!!");
  req.logout();
  res.flash('success', 'Deslogueado!')
  res.redirect('/admin')
}

export default adminLogout
