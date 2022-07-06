
import { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: '',

    };
  }

  onUpdateToken = token => this.setState({ authToken: token });


  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login onUpdateToken={this.onUpdateToken} />} />
          <Route path="/dashboard" element={<Dashboard onUpdateToken={this.onUpdateToken} token={this.state.authToken}  />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
