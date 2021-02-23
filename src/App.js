import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import Entry from './pages/entry/entry.page';
import Contact from './pages/contactAndAbout/contact.page';
import Header from './components/header/header.component';
import SignInOrUpPage from './pages/sign-in-or-up/sign-in-or-up.page';


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
              <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/entry' component={Entry}/>
                  <Route exact path='/diary' component={HomePage}/>
                  <Route exact path='/metrics' component={HomePage}/>
                  <Route exact path='/contact' component={Contact}/>
                  <Route exact path='/signin' component={SignInOrUpPage}/>
              </Switch>
              <Header/>
          </div>
        );
    }
}

export default App;
