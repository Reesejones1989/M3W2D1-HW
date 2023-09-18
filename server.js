const express = require ('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3000;

const pokemon = require("./models/pokemon")

app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine'));
app.engine('jsx', jsxEngine())


app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon/', (req,res) =>{
    res.render('Index', {pokemon: pokemon});
})

app.get('/pokemon/:id', (req,res) =>{
    res.send(req.params.id);
})























app.listen(3000, () => {
    console.log('Server is running on http://localhost:' + port)
})