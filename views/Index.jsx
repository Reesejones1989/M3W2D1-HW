const React = require('react');

//in-line stylling
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
const upperCase = {
    textTransform:'capitalize',
    fontSize: "20px",
    color: "green"
}
const back = {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontSize: "50px"
}
const pokemonName = {
    color: "white",
}
class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style = {myStyle}>
                  <h1>See All Pokemon</h1>
                  <ul>
                      {pokemon.map((onePokemon, i) => {
                          return (
                              <li key ={i} style = {upperCase}>
                                  
                                  <a style={pokemonName} href={`/pokemon/${i}`}>
                                      {onePokemon.name}
                                  </a>{' '}
                                  <form action={`/pokemon/${i}?_method=DELETE`} method="POST"><input type="submit" value="DELETE"/>
                                 </form> 
                      {/* <a href={`/pokemon/${i}/edit`}>Edit This Pokemon</a> */}
                              </li>
                          );
                      })}
                  </ul>
                        <nav>
                        <a style={back}
                        href="/pokemon/new">Submit a New Pokemon</a>
                        </nav>
              </div>
      );
  }
}
module.exports = Index;