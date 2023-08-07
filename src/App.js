import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Nc6GUSF7D7Kh7sQhLiNYXVKQuVmJujTfCfDY0aQIpT5wKWJ35UnXwn4JNaNfTfG55SzRfPXZSrNrNN83XuwibA40047ngglPO');

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() =>{
    // will only run once when app component is loaded   
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS:',authUser);
      if (authUser){
        // user just logged in / user was logged in 
        dispatch(
          {
            type: 'SET_USER',
            user: authUser
          }
        );
      }
      else{
        // user logged out
        dispatch(
          {
            type: 'SET_USER',
            user: null
          }
        )
      }
  })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
