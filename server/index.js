import app from './app'



app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("funcionando");
})
