const React = require('react');

//in-line stylling
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
const back = {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontSize: "100px"
}
const upperCase = {
    textTransform:'capitalize',
    // textAlign: "Center"
}


class Show extends React.Component {
  render() {
      // const pokemon = this.props.onePokemon;
      const pokemon = this.props.pokemon;
      // const onePokemon = this.props.onePokemon
      const url = "https://img.pokemondb.net/artwork/"
      // const fullName = url + pokemon.name + ".jpg"
       var loweredName = pokemon.name.toLowerCase()
       var loweredImg = pokemon.img.toLowerCase()
       const namejpg = url + loweredName + ".jpg"

        return (
              <div style = {myStyle}>

                  <h1>Gotta Catch 'Em All</h1>
                <h2 style={upperCase}>
                {pokemon.name}
                </h2>


               
                <img src= {loweredImg + ".jpg"} >
                {/* <img src={namejpg} > */}
                </img>

                
             
                <a style = {back} href='/pokemon'> Back </a>
                

                     
              </div>
      );
  }
  
}
module.exports = Show;