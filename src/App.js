

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AgrupadosPorDiametro from './components/AgrupadosPorDiametro';
import Detalle from "./components/Detalle";
import React,{ Component } from "react";

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/agrupadospordiametro" component={AgrupadosPorDiametro} ></Route>
        <Route path="/detalle/:id" component={Detalle} ></Route>
      </Switch>    
    )
  }
}

export default App;


