import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch,withRouter}  from 'react-router-dom';
import Navbar from './components/layout/Navigation';
import FrontNavbar from './components/layout/FrontNavigation';
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
//Redux

import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App = (props) =>  {

  // Learn more about useEffect https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);
  
 const current_route = window.location.pathname;
  return(
    <Provider store={store}>
      <Router>
      { current_route == '/' ? 
        <Fragment>
        <div class="fixed-bg-overlay"></div>
        <div class="fixed-bg"></div>
          <div className="container-fluid">
            <div className="row">
              <div id="vertical_nav_wrap" className="col-lg-4 col-xs-12 pad-zero vertical-nav-wrap">
                <FrontNavbar /> 
              </div>
              <div className="col-lg-8 col-xs-12 pad-zero">
                <Home />
              </div>
                      
            </div>
          </div>

        </Fragment>
       :
        <Fragment>
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
          <Navbar />          
        </Fragment>
      }
      </Router>
    </Provider>
)};

export default App;
