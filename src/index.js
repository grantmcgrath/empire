import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Styles
import './styles/index.css';

//Components
import Layout from "./components/Layout";
import Home from './components/Home';
import AvailableProperties from './components/AvailableProperties';
import CommercialProperties from './components/CommercialProperties';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/availableproperties" component={AvailableProperties} />
        <Route exact path="/commercialproperties" component={CommercialProperties} />
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
