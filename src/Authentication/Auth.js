import React,{useState,useContext} from 'react'
import MainNav from '../Imported/MainNav'
import {GoogleLogin} from 'react-google-login'
import lock from './padlock.svg'
import {AuthContext} from '../Authentication/Auth-context/authContext'
import './Auth.css'
const Auth = () => {
  const auth=useContext(AuthContext);
  const handleLogin = async googleData => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}users/login`, {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
      auth.logIn(data.token,data.isRegistered);
    // store returned user somehow
  }

    return (
        <div style={{backgroundImage:`url(${`https://wallpaperaccess.com/full/54720.jpg`})`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',
        backgroundSize:'cover', backgroundPosition:'center center', opacity:'0.8',height:'100vh',width:'100vw' }}  >
            <MainNav /><br/><br/><br/><br/>
             <div className="welcomee">
             <h2  ><b>Sign-In here</b></h2>
            </div>
                    <div className="form_class">
                    <img src={lock} alt="login" style={{height:'40vh',width:'50vw'}} /> 
                    <form className="formm" >
                    {/* { !loggedIn &&  (<div>


                    <input className="inpt" type="text" placeholder="Username" id="username" name="username" required />
                      </div>)}
                      
                      <input className="inpt" placeholder="Email" type="email" id="email" required />
                      
                      <input className="inpt" placeholder="Password" type="password" id="psw" name="psw" pattern=".{8,}" title="atleast 8 or more characters" required /><br/>

                      
                      <button className="signinbtn" type="submit" > {loggedIn ? 'LogIn':'SignUp'}  </button><br/>
                      {!loggedIn && <p style={{marginBottom:'1px'}} ><strong>Already have an account??</strong></p>}
                      <div className="loggin">
                      <a className="anchor"  onClick={()=>setLoggedIn(prev=>!prev)} > {loggedIn ?'SignUp':'LogIn'}  </a>
                      
                    </div> */}
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      
                      buttonText="Log in with Google"
                      onSuccess={handleLogin}
                      onFailure={handleLogin}
                      cookiePolicy={'single_host_origin'}
                      />
                    </form>
                    </div>


                    {/* <div id="message">

                    <p id="length" className="invalidd">Minimum <b>8 characters</b></p>
                    </div> */}
       </div>
    )
}

export default Auth
