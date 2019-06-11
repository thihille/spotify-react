import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from "./routesConfig";
import { createBrowserHistory } from 'history';

import { ThemeProvider } from "styled-components";
import { Wrapper, DefaultStyle } from "./style";
import theme from "./theme";

import Logotipo from './components/Logotipo/Logotipo';
import Autenticacao from './helpers/autenticacao'
import './App.css';


const supportsHistory = "pushState" in window.history;
const history = createBrowserHistory({ basename: process.env.BASENAME });


class App extends Component {
  
  componentDidMount(){
    const autenticar = new Autenticacao();
    autenticar.verificar();
  }
  
  render(){
    return(

      <Router forceRefresh={!supportsHistory} history={history}>
        <ThemeProvider theme={theme}>
          <Wrapper className="App">
            <Logotipo />
            <Routes />
            <DefaultStyle />
          </Wrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;