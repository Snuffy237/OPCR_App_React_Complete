import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Survey from './pages/Survey';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Admin from './admin/Admin';
import User from './user/User';
import Error from './components/Error';
import Results from './components/Results';
import Freelances from './components/Freelances';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <h2>Page principale à la racine</h2>
      <Header/>

      <Switch>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>

        <Route path='/admin'>
          <Admin />
        </Route>

        <Route path='/user'>
          <User />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>

      <Route exact path="/results">
        <Results />
      </Route>

      <Route exact path="/freelances">
        <Freelances />
      </Route>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
