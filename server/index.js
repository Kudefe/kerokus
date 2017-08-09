import app from './app'

let port = process.env.port || 3000;

app.listen(port, (req, res) => {
  console.log("funcionando");
})
