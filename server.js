const express = require ('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3001;
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const _id = mongoose.Types._id

// const pokemon = require("./models/pokemon")
const Pokemon = require("./models/pokemonSchema.js")

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine'));
app.engine('jsx', jsxEngine())

dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: false });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App!');
})

//INDEX
app.get('/pokemon/', async (req,res) =>{
      // res.render('fruits/Index');
      
      try{
        const pokemon = await Pokemon.find();
    //     console.log(pokemon.name)
    //   console.log(pokemon.img)
    console.log("CATCH THEM ALL" + pokemon)
        res.render('Index', {pokemon: pokemon})
        // res.send("Ok")
    }
    catch(error){
        console.error(error)
    }})
// app.get('/pokemon/', (req,res) =>{
//     res.render('Index', {pokemon: pokemon});
// })
 
//NEW- Get the Form to add a new Pokemon

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//DELETE
app.delete('/pokemon/:id', async(req, res)=>{
    try {
     await Pokemon.findByIdAndRemove(req.params.id)
    console.log(Pokemon)
         res.redirect('/pokemon');//redirect back to pokemon index
     }catch(error){
         console.error(error)
     }})

//UPDATE
app.put("/pokemon/:id",  async (req, res) => {
    try {     
       await Pokemon.findByIdAndUpdate(req.params.id, req.body)
  
      res.redirect("/pokemon")
  
    } catch(error) {
      console.log(error)
    }
  })

//CREATE
app.post('/pokemon', async (req, res) => {
   
    // console.log(req.body)
   await Pokemon.create(req.body);
   console.log(req.body)
//   pokemon.create(req.body)
    // console.log(pokemon)
    // res.send('data received');
 

    res.redirect('/pokemon'); //send the user back to /pokemon

});

//EDIT
app.get('/pokemon/:id/edit', async (req, res)=>{
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        //  Pokemon.push(req.body);
        res.render('Edit', 
        {pokemon: foundPokemon})
    } catch(error) {
        console.log(error)
      }
})


//SHOW
app.get('/pokemon/:id', async (req, res) => {

// try{
//     console.log("LOOK HERE")
//     const pokemon = await Pokemon.findById(req.params.id);
//     // console.log(pokemon.name)
//     res.render("Show", {pokemon: pokemon})
// }catch(error){
//     console.log(error)
// }
// });
    try{
           console.log("LOOK HERE")

        const pokemon = await Pokemon.findById(req.params.id);
        res.render("Show", {pokemon: pokemon})
    }catch(error){
        console.log(error)
    }
    });





















app.listen(3001, () => {
    console.log('Server is running on http://localhost:' + port)
})