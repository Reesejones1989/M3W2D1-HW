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
}


class Show extends React.Component {
  render() {
      const pokemon = this.props.onePokemon;
      const url = "https://img.pokemondb.net/artwork/"
      var loweredName = pokemon.name.toLowerCase()
        const namejpg = loweredName + ".jpg"
       
      return (
              <div style = {myStyle}>
                  <h1>Gotta Catch 'Em All</h1>
                <h2 style={upperCase}>{pokemon.name}</h2>


               
                <img src={url + namejpg} >
                </img>

                
             
                <a style = {back} href='/pokemon'> Back </a>
                

                     
              </div>
      );
  }
  
}
module.exports = Show;