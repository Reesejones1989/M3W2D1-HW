const express = require ('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3001;

const pokemon = require("./models/pokemon")

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine'));
app.engine('jsx', jsxEngine())

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon/', (req,res) =>{
    res.render('Index', {pokemon: pokemon});
})

//NEW- Get the Form to add a new Pokemon

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});


app.post('/pokemon', (req, res) => {
   
    // console.log(req.body)
    pokemon.push(req.body);
  
    console.log(pokemon)
    // res.send('data received');
 

    res.redirect('/pokemon'); //send the user back to /pokemon

});


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