import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch }  from 'react-router-dom';
import Navbar from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExpierence from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Alert from './components/layout/ui/alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux

import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App = () =>  {

  // Learn more about useEffect https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);
console.log(currentRoute.name);
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        
        <section className='container'>
        <Route exact path='/' component={Home} />
          <Alert/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-portfolio' component={CreateProfile} />
            <PrivateRoute exact path='/edit-portfolio' component={EditProfile} />
            <PrivateRoute exact path='/add-experience' component={AddExpierence} />
            <PrivateRoute exact path='/add-education' component={AddEducation} /> 
          </Switch>
        </section>
      </Fragment>
      </Router>
    </Provider>
)};

export default App;
