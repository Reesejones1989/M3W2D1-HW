const React = require('react');
// As you can see we are using the app layout

class Edit extends React.Component{
  render() {
    return (
    <div>
        <h1>Pokemon Edit Page</h1>
          <form action={`/pokemon/${this.props.i}?_method=PUT`} method="POST"> 


          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
          
        
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;