const express = require ('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3001;
const dotenv = require("dotenv")
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');

const pokemon = require("./models/pokemon")

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine'));
app.engine('jsx', jsxEngine())

dotenv.config()

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App!');
})

//INDEX
// app.get('/pokemon/', async (req,res) =>{
//       // res.render('fruits/Index');
//       try{
//         const pokemon = await pokemon.find();
//         res.render('Index', {pokemon: pokemon})
//     }
//     catch(error){
//         console.error(error)
//     }})
app.get('/pokemon/', (req,res) =>{
    res.render('Index', {pokemon: pokemon});
})
 
//NEW- Get the Form to add a new Pokemon

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//DELETE
app.delete('/pokemon/:id', async(req, res)=>{
    try {
    //  await pokemon.findByIdAndRemove(req.params.id)
     await pokemon.splice(id,1)
         res.redirect('/pokemon');//redirect back to pokemon index
     }catch(error){
         console.error(error)
     }})

//UPDATE
app.put("/pokemon/:id",  async (req, res) => {
    try {     
       await pokemon.findByIdAndUpdate(req.params.id, req.body)
    // await pokemon.splice(id,1)
  
      res.redirect("/pokemon")
  
    } catch(error) {
      console.log(error)
    }
  })

//CREATE
app.post('/pokemon', async (req, res) => {
   
    // console.log(req.body)
   await pokemon.push(req.body);
  
    console.log(pokemon)
    // res.send('data received');
 

    res.redirect('/pokemon'); //send the user back to /pokemon

});

//EDIT
app.get('/pokemon/:id/edit', async (req, res)=>{
    try {
        const foundPokemon = await pokemon.findById(req.params.id)
        res.render('pokemon/Edit', 
        {pokemon: foundPokemon})
    } catch(error) {
        console.log(error)
      }
})


//SHOW
app.get('/pokemon/:id', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {
        onePokemon: pokemon[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
});
});





















app.listen(3001, () => {
    console.log('Server is running on http://localhost:' + port)
})