import React, { Component } from 'react';
import './App.css';
import FormControl from 'react-bootstrap/lib/FormControl'

let marked = require("marked");

class App extends Component {

  state ={
    markdown: ""
  }

  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render() {

    let {markdown} = this.state;

    return (
      <div className="App">
        <FormControl className="AppTextarea" componentClass="textarea" placeholder="Write some markdown. Try it!" value={markdown} onChange= {(event)=>this.updateMarkdown(event.target.value)}></FormControl>
        <div className="AppTextOutput" dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
      </div>
    );
  }
}

export default App;
