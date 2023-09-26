const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon page</h1>

            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image Link: <input type="text" defaultValue = "https://img.pokemondb.net/artwork/" name="img" />
              <input type="submit" name="" value="New Pokemon Submit"/>
            </form>
        </div>);
    }
  }

module.exports = New;