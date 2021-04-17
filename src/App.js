import logo from './logo.svg';
import './App.css';
import {useState,useCallback,useEffect} from 'react'
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
import LeaderBoard from './LeaderBoard/LeaderBoard';
import GoogleForm from './Register and Rounds/Round_2/GoogleForm';
import Finali from './Register and Rounds/Round_3/Finali';
import MainNav_2 from './Imported/MainNav_2';

//require('dotenv').config()
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [token,setToken]=useState()
  const [registered,setRegistered]=useState(false);

 const logIn= useCallback((token,rid)=>{
   console.log('logged In');
   setRegistered(rid);
    setToken(token);
      setIsLoggedIn(true);
      localStorage.setItem('userData',JSON.stringify({
        token,
        isRegistered:rid
      }))
 })
  
const logOut= useCallback(()=>{
   setToken(null);
   console.log('logged Out');
  setIsLoggedIn(false);
  localStorage.removeItem('userData')
})

useEffect(() => {
  const storeData= JSON.parse(localStorage.getItem('userData')) 
  if(storeData && storeData.token){
    logIn(storeData.token,storeData.isRegistered)
  }
}, [logIn])
  return (
    <div className="App">
 
     <Router>
       <AuthContext.Provider value={{logIn,logOut,token,isLoggedIn,isRegistered:registered}}  >
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
       <Route path="/start" exact>
         <MainNav_2 />
         <Round_1Page />
       </Route>
       <Route path="/Round1_begins" exact>
       <MainNav_2 />
         <Quiz />
       </Route>
       <Route path="/leaderBoard" exact>
         
        <MainNav_2 />
         <LeaderBoard />
         
       </Route>
       <Route path="/round2" exact>
       <MainNav_2 />
         <GoogleForm />
       </Route>
       <Route path="/round3" exact>
         <MainNav_2 />
         <Finali />
       </Route>
       
       </Switch>
       </AuthContext.Provider>
     </Router>

    </div>
  );
}

export default App;
