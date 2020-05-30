import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       disabled: true
    }
  }

  handleChange = (e) => {
    if(e.target.value.length >= 6) {
      this.setState({
        disabled: false
      })
    }
    else {
      this.setState({
        disabled: true
      })
    }
  }
  
  render() {
    const {disabled} = this.state
    return (
      <div className="App">
        <form>
          <input type="text" placeholder="User Id" onChange={this.handleChange} />
          <br/>
          <button disabled={disabled}>Proceed</button>
        </form>
      </div>
    );
  }
}

export default App;
