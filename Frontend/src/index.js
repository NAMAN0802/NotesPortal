import React,{useState} from 'react';
import bhagg from 'react-dom';
import App from './App'
import Login from './login'
import Registration from './Registration'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Dekhtehe=() => (
    <>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Registration" component={Registration}/>
        <Route exact path="/App" component={App}/>

    </>
);


bhagg.render(<>
    <Router>
        <Dekhtehe/>
    </Router>
    </>,document.getElementById("root"));

