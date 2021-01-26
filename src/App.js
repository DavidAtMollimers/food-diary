import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import Entry from './pages/entry/entry.page';
import Contact from './pages/contactAndAbout/contact.page';
import Header from './components/header/header.component';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    render() {
        return (
          <div>
              <Header/>
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/entry' component={Entry}/>
                  <Route exact path='/diary' component={HomePage}/>
                  <Route exact path='/metrics' component={HomePage}/>
                  <Route exact path='/contact' component={Contact}/>
              </Switch>
          </div>
        );
    }
}

export default App;
