const React = require('react');

const myStyle = {
  width: "300px",
  height: "25px",
  };
  const myStyle2 = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class New extends React.Component {
  render() {
    return (
        <div style={myStyle2}>
            <h1>New Pokemon page</h1>

            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image Link: <input style={myStyle} type="text" defaultValue = "https://img.pokemondb.net/artwork/" name="img" />
              <input type="submit" name="" value="New Pokemon Submit"/>
              <h2>Add the Pokemon Name to the Image Link textbox above as well</h2>
            </form>
        </div>);
    }
  }

module.exports = New;