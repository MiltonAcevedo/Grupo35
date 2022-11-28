import  express  from "express"
const app = express()

app.get('/',  (req, res) => {
  res.send('bienvenidos 🐱‍🚀a la clase de desarrollo web')
})

app.listen(8000, ()=> {
 console.log ("el servidor esta corriendo en http://localhost:8000")

})