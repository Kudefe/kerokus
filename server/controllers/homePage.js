const homePage = {}

homePage.get = (req, res) => {
  res.render('home', {
    title:"funcionando!!!"
  })
}

export default homePage
