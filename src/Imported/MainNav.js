import React,{useState,useEffect} from 'react'
import {useParams,NavLink} from 'react-router-dom'
import './MainNav.css'
const MainNav = () => {
    // $(".toggle").click(function(){
    //     $(".navcollaps").toggleClass("show");
    //   });
    const [hdr,setHdr]=useState();
    const [show,setShow]=useState(false)
    const openCloseHandler=()=>{
         setShow(prev=>!prev);
    }
    
    
  //  useEffect(()=>{
      // window.addEventListener("scroll", function(){
      //   var header=document.querySelector(".navvbar");
      //    header.classList.toggle("scroll-down",window.scrollY>0);
      
      // })
    
  //  },[hdr])
  
  //  const currentLocation=location.href;
  //  const currentLocation=useParams(href);
  // console.log(location.href)
  //  const menuItem=document.querySelectorAll('a');
  //  const menuLength=menuItem.length;
  //  for(let i=0;i<menuLength;i++){
  //    if(menuItem[i].href===currentLocation){
  //      menuItem[i].className="navlinkactive"
  //    }
  //  }
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
        <li><NavLink  to="/auth"  activeClassName="activa">Signin</NavLink></li>
        <li><NavLink exact to="#3" className="normal" activeClassName="activa">Rules</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="activa">About</NavLink></li>
        <li><NavLink exact to="/register" activeClassName="activa">Register</NavLink></li>
      </ul>

  </div>
         </div>

        </div>
    )
}

export default MainNav
