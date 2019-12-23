import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route,Switch}  from 'react-router-dom';
import Navbar from './components/layout/Navigation';
import FrontNavbar from './components/layout/FrontNavigation';
import Home from './components/Home/Home';
import Alert from './components/layout/ui/alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Routes from './components/routing/Routes';
import './App.css';
//Redux

import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

class  App extends Component  {

  // Learn more about useEffect https://reactjs.org/docs/hooks-effect.html
  constructor(props) {
    super(props);

    this.state = {
      class: ''
    }
  }
  handleScroll = () => {
   // console.log(this.state);

    const scrollpos = window.scrollY;

    if(scrollpos > 10){
      this.setState({
        class:'fixed'
      });
    }
    else {
      this.setState({
        class:''
      });
    }
    
  }
  
  componentDidMount(){
    store.dispatch(loadUser());
    window.addEventListener('scroll',this.handleScroll);
    
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

 render() {
  const current_route = window.location.pathname;
    return(
        <Provider store={store}>
          <Router>
          { current_route === '/' ? 
            <Fragment>
            <div className="fixed-bg-overlay"></div>
            <div className="fixed-bg"></div>
              <div className="container-fluid">
                <div className="row">
                  <div id="vertical_nav_wrap" className="col-lg-3 col-xs-12 pad-zero vertical-nav-wrap">
                    <FrontNavbar/> 
                  </div>
                  <div className="col-lg-9 col-xs-12 pad-zero">
                    <Home fixedClass={this.state.class } />
                  </div> 
                </div>
              </div>

            </Fragment>
          :
            <Fragment>
                <Route exact path='/' component={Home} />
                  <Alert/>
                  <Switch>
                    <Route exact path='/' component={Home} />   
                    <Route component={Routes} />
                  </Switch>
              <Navbar />          
            </Fragment>
          }
          </Router>
        </Provider>
    )
    }
}
  

export default App;
