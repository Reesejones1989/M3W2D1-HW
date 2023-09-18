const React = require('react');

//in-line stylling
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style = {myStyle}>
                  <h1>See All Pokemon</h1>
                  {/* <ul>
                      {pokemon.map((onePokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/onePokemon/${i}`}>
                                      {onePokemon.name}
                                  </a>{' '}
                                  is {onePokemon.color} <br></br>
                                  {onePokemon.readyToEat
                                      ? `It is ready to eat`
                                      : `It is not ready to eat`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul> */}
              </div>
      );
  }
}
module.exports = Index;