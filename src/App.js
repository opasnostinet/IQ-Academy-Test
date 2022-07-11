
import { Component } from 'react';
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';
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

  dashboardGuard() {
    return this.state.authToken === ''
      ? <Navigate to='/login' />
      : <Dashboard onUpdateToken={this.onUpdateToken} token={this.state.authToken} />;
  }

  loginGuard() {
    return this.state.authToken !== ''
      ? <Navigate to='/dashboard' />
      : <Login onUpdateToken={this.onUpdateToken} />;
  }

  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='login' element={this.loginGuard()} />
          <Route path='dashboard' element={this.dashboardGuard()} />
        </Routes>
      </HashRouter>
    )
  }
}

export default App;
