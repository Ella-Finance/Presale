import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/home/Landing';

import { Provider } from 'react-redux';
import store from './store';
import {
  Web3ReactProvider,
} from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './css/App.css';
import { Header } from './components/layout/parts/Header';








const App = () => {
  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        {/* <Sidebar /> */}
        <Route exact path='/' component={Landing} />
       
        <section className=''>
          {/* <Alert /> */}
          <Switch>
          
          </Switch>
        </section>
        {/* <Footer /> */}
      </Fragment>
    </Router>
  </Provider>
    </Web3ReactProvider>
  );
};
export default App;
