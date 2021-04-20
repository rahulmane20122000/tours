
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Tours from './Components/Tours';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './otherComponents/Footer';



function App() {
  return (
    <div className="App">
    <Navbars/>
    <Switch>
     <Route exact path='/'>{Home}</Route>
     <Route exact path='/tours'>{Tours}</Route>
     <Route exact path='/register'>{Register}</Route>
     <Route exact path='/login'>{Login}</Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
