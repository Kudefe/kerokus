const homePage = {}

homePage.get = (req, res) => {
  res.redirect('/games')
}

export default homePage
