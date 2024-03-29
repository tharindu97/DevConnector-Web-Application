import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreatePrfile';
import EditProfile from './components/profile-forms/EditeProfile';
import AddExperience from './components/profile-forms/AddExperience';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loaduser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () => { 

  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

  return(
    <Provider store={store}>
      <Router>
        <Fragment>
            <Navbar/>
            <Route exact path='/' component={Landing} />
            <section className='container'>
              <Alert /> 
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute 
                  exact 
                  path='/create-profile' 
                  component={CreateProfile} 
                />
                <PrivateRoute 
                  exact 
                  path='/edit-profile' 
                  component={EditProfile} 
                />
                 <PrivateRoute 
                  exact 
                  path='/add-experience' 
                  component={AddExperience} 
                />
              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
)};

export default App;
   