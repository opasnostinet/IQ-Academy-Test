
import { Component } from 'react';
import { Login } from './pages/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: '',

    };
  }

  onUpdateTocken = token => this.setState({ authToken: token });


  render() {
    return (
      <>
        <Login onUpdateTocken={this.onUpdateTocken} />
      </>
    )
  }
}

export default App;
