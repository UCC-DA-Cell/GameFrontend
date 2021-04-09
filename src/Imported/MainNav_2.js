import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import './MainNav_2.css'
import {AuthContext} from  '../Authentication/Auth-context/authContext'
const MainNav_2 = () => {
    const auth= useContext(AuthContext)
    const openNav=()=>{
        console.log('open nav');
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav=()=>{
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            

                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky" style={{zIndex:1000}} >
            <button className="navbar-toggler" type="button" style={{float:'left',border:'none'}} aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={openNav}>
            <span>
                <img src="https://ik.imagekit.io/slashit/choco_divine/121994_bA7-vUbdM.png" alt="chocomenu" style={{width:'40px',height:'40px',zIndex:'2'}} />
            </span>
            </button>
            {/* <!-- <a href="#"><span class="fa fa-user"></span></a> --> */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact >Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/about" exact>About</NavLink>
                </li>
                { auth.isLoggedIn &&
                    <li className="nav-item" >
                    <NavLink className="nav-link" to={ auth.isRegistered  ?'/start' : `/register`} exact >
                        {auth.isRegistered ? 'Start Now': `Register for Events`}</NavLink></li>}
                
            
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/#contactus">Contact</NavLink>
                </li> */}
            </ul>

            </div>
            <div style={{right:'50px'}}>
            
                    { !auth.isLoggedIn && 
                    <NavLink to="/auth"  ><button type="button" className="btn btn-success" >SignIn</button></NavLink>
                     }
                         { auth.isLoggedIn && 
                    <NavLink to="/"  ><button type="button" className="btn btn-success" onClick={event=>auth.logOut()} >LogOut</button></NavLink>
                     }
                            {/* <form action="/logout" method="post">
                                    <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                    <button type="submit" class="btn btn-success">Logout</button>
                            </form> */}
            </div>
            </nav>

    {/* nav bar ends */}
            <div id="mySidenav" className="sidenav">
            <NavLink to="/" className="closebtn" onClick={closeNav}>&times;</NavLink>
            <NavLink className="nav-link" to="/" onClick={closeNav}>HOME <span className="sr-only">(current)</span></NavLink>
            <NavLink  to="/about" onclick={closeNav}>ABOUT</NavLink>
            { auth.isLoggedIn &&
       <li className="nav-item" >
       <NavLink exact className="nav-link" style={{marginTop:'-20px'}}  to={ auth.isRegistered  ?'/start' : `/register`} >
           {auth.isRegistered ? 'Start Now': `Register for Events`}</NavLink></li>}

        {/* { !auth.isLoggedIn && <NavLink to="/auth" onClick={closeNav}>SIGNIN</NavLink>}
        { auth.isLoggedIn &&    <NavLink  to="/signup" onClick={closeNav} onClick={event=>auth.logOut()}>LOGOUT</NavLink>} */}
            
         

            </div>




</div>
    )
}

export default MainNav_2
