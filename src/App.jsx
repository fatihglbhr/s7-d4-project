import './App.css'
import Login from './components/Login'
import Success from './components/Success'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/success'>
        <Success />
      </Route>
      <Route path='/error'>
        <Error />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
