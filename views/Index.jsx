const React = require('react');

//in-line stylling
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
const upperCase = {
    textTransform:'capitalize'
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
                              <li style = {upperCase}>
                                  
                                  <a href={`/onePokemon/${i}`}>
                                      {onePokemon.name}
                                  </a>{' '}
                               
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;