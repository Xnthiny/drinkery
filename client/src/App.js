import React, { Component } from 'react'
import Home from './Pages/Home/Home';


class App extends Component {
  state= {
    this: "MasterState"
  }
  render() {
    console.log(this.state.this);
    return (
            <Home />
        )
      }
    }
    
    
    export default App;
