import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Header from "./components/Header";
import Home from "./components/Home";
import Home1 from "./Home1";
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec, signin } from './actions'


function App() {
  // const count = useSelector(state => state.mycount)
  // const islogged = useSelector(state => state.logged)
  // const dispatch = useDispatch()
  return (
    <div className="App">
    <Header />
      <Home/>
    {
      //1. Tesla Clone
          // <Header />
      // <Home/>
    }
    { //2. Redux
     

      // <h1>Hi guys</h1>
      // <h1> {count} </h1>

      // <button onClick={ ( )=> dispatch(inc())} >+</button>
      // <button onClick={ ( )=> dispatch(dec())} >-</button>
      // { islogged? 'Im logged in' : '' }
    }
    </div>
  );
}

export default App;