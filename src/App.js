import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MainNav from './Imported/MainNav'
import SlideShow from './Imported/SlideShow'
import ContentSection from './Imported/ContentSection'
import Video_content from './Imported/Video_content'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import Auth from './Authentication/Auth';
import { AuthContext } from './Authentication/Auth-context/authContext';
import Register from './Register and Rounds/RegisterPage/Register';
import Round_1Page from './Register and Rounds/Round_1/Round_1Page';
import Quiz from './Register and Rounds/Round_1/Quiz';
import AboutPage from './AboutUs/AboutPage';
import Panel from './userPanel/Panel'
require('dotenv').config()
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const login=()=>{
       setIsLoggedIn(true);
  }
  const logout=()=>{
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
 
     <Router>
       <AuthContext.Provider value={{login,logout,isLoggedIn}}  >
       <Switch>
       <Route path="/" exact>
         <HomePage />
       </Route>
       <Route path="/auth" exact>
         <Auth />
       </Route>
       <Route path="/register" exact>
        <Register />
       </Route>
       <Route path="/about" exact>
        <AboutPage />
       </Route>
       <Route path="/user" exact>
         <Panel />
       </Route>
       <Route path="/:userId/start" exact>
         <Round_1Page />
       </Route>
       <Route path="/Round1_begins" exact>
         <Quiz />
       </Route>
       </Switch>
       </AuthContext.Provider>
     </Router>

    </div>
  );
}

export default App;
