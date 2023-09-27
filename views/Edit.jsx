const React = require('react');
// As you can see we are using the app layout
const myStyle = {
  width: "300px",
  height: "25px",
  };

class Edit extends React.Component{
  render() {
    return (
    <div>
        <h1>Pokemon Edit Page</h1>
          <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST"> 


          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>

          Image: <input style={myStyle} type="text" name="img" defaultValue={this.props.pokemon.img}/><br/>
          
        
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;