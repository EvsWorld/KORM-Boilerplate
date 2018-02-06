import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'KORM Boilerplate online.',
    };
  }

  render() {
    const { message } = this.state;
    return <h1> {message} </h1>;
  }
}

export default App;
