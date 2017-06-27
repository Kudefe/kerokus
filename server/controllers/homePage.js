const homePage = {}

homePage.get = (req, res) => {
  res.flash('info', 'siiiii, funcionoooo')
  res.flash('error', "Error wn!")
  res.redirect('/games')
}

export default homePage
