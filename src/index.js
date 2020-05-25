import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Styles
import './styles/index.css';

//Components
import Home from './components/Home';
import Layout from "./components/Layout";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
     <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
