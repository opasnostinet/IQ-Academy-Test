
import { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login onUpdateTocken={this.onUpdateTocken} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
