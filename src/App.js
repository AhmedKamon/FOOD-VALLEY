import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AddMore from './Components/AddMore/AddMore';
import CheckOut from './Components/CheckOut/CheckOut';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';

export const UserContext = createContext([]);

function App() {
  const [userId,setUserId] = useState([])
  return (
    <Router>
      <UserContext.Provider value={[userId,setUserId]}>
      <Header></Header>
      <Switch>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <PrivateRoute path='/addMore'>
        <AddMore></AddMore>
      </PrivateRoute>
      <PrivateRoute path='/orders'>
        <Orders></Orders>
      </PrivateRoute>
      <PrivateRoute path='/checkout/:id'>
        <CheckOut></CheckOut>
      </PrivateRoute>
      </Switch>
      </UserContext.Provider>
    </Router>
    
  );
}

export default App;
