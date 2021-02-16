import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Item from './components/item/Item';
import Notfround from './components/Notfound/Notfround';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route path='/item' component={Item} />
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='*' component={Notfround} />
      </Switch>
    </Router>
  )
}
export default App;
