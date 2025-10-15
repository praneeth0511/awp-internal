import React, { Component } from "react";
//create a class component that accepts the arbitarty inputs called props and display the value
class App extends Component{
  constructor(props){
    super(props)
    this.value=""
    this.state={
      "name":''
    }
   
  }
  handle(){
    this.value="hello"
  }
  render(){
    return(
      <div>
        <h1>Class Component</h1>
        <input type="text"  onClick={handle()}/>
        <h1>{this.setState.name}</h1>
      </div>
    )
  }
}

export default App;
