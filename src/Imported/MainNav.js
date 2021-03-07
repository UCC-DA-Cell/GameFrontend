import React,{useState,useEffect,useContext} from 'react'
import {useParams,NavLink} from 'react-router-dom'
import { Button } from 'reactstrap'
import {AuthContext} from '../Authentication/Auth-context/authContext'
import './MainNav.css'
const MainNav = () => {
    // $(".toggle").click(function(){
    //     $(".navcollaps").toggleClass("show");
    //   });
    const auth=useContext(AuthContext);
    const [hdr,setHdr]=useState();
    const [show,setShow]=useState(false)
    const openCloseHandler=()=>{
         setShow(prev=>!prev);
    }
    
    
 
    return (
        <div>
              <div className="navvbar">
  <div className="contaier">

    <div className="navvbar-header">
      <button className="toggle" onClick={openCloseHandler} ><span></span>
      <span></span>
      <span></span></button>
      {/* <a href="" className="navbar-brand">Hello World</a> */}
      {/* <button className="specila_btn" >Star</button> */}
    </div>

      <ul className={`navv navvcollaps ${show && ('show')}`}>
      <li><NavLink exact to="/" > Home</NavLink></li>
      { !auth.isLoggedIn ? 
      <li><NavLink  to="/auth"  activeClassName="activa">Signin</NavLink></li>
     :  <li> <NavLink to="/" onClick={event=>auth.logOut()} >Log Out</NavLink> </li> }
        {/* <li><NavLink exact to="#3" className="normal" activeClassName="activa">Rules</NavLink></li> */}
        <li><NavLink exact to="/about" activeClassName="activa">About</NavLink></li>
      { auth.isLoggedIn &&
       <li><NavLink exact to={ auth.isRegistered  ?'/start' : `/register`} activeClassName="activa">{auth.isRegistered ? 'Start Now': `Register for Events`}</NavLink></li>}
      </ul>

  </div>
         </div>

        </div>
    )
}

export default MainNav
