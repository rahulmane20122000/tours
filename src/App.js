import {useEffect} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Tours from './Components/Tours';
import Register from './Components/Register';
import Login from './Components/Login';

import TourDetails from './otherComponents/TourDetails';
import About from './Components/About';
import Confirm from './otherComponents/Confirmorder';
import Myorders from './otherComponents/Myorders';
import Myaccount from './otherComponents/Myaccount';
import Booknow from './otherComponents/Booknow';
import Paymentdetails from './otherComponents/Paymentdetails';



function App(props) {


  return (
    <div className="App">
   
    <Navbars/>
    <Switch>
     <Route exact path='/'>{Home}</Route>
     <Route exact path='/tours'>{Tours}</Route>
     <Route exact path='/register'>{Register}</Route>
     <Route exact path='/login'>{Login}</Route>
     <Route exact path='/tourdetails/:pname' component={TourDetails}/>
     <Route exact path='/aboutUs' component={About}/>
     <Route exact path='/confirm/:cname' >{Confirm}</Route>
     <Route exact path='/mytours/:oname' >{Booknow}</Route>
     <Route exact path='/myaccount'>{Myaccount}</Route>
     <Route exact path='/mytickets/:tname'>{Myorders}</Route>
     <Route exact path="/payment_details/:oo" component={Paymentdetails} />
     <Route exact path="/mytours" component={Myorders}/>
    </Switch>
   
    </div>
  );
}

export default App;
