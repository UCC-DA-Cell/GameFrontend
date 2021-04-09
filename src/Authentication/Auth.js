import React,{useState,useContext} from 'react'
import MainNav from '../Imported/MainNav'
import {GoogleLogin} from 'react-google-login'
import lock from './padlock.svg'
import {AuthContext} from '../Authentication/Auth-context/authContext'
import './Auth.css'
import MainNav_2 from '../Imported/MainNav_2'
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
            <MainNav_2 /><br/><br/><br/><br/>
             <div className="welcomee">
             <h2 className="signIn__text"  >Sign-In here</h2>
            </div>
                    <div className="form_class">
                    <img src={lock} alt="login" style={{height:'40vh',width:'50vw'}} /> 
                    <form className="formm" >
                  
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      
                      buttonText="Log in with Google"
                      onSuccess={handleLogin}
                      onFailure={handleLogin}
                      cookiePolicy={'single_host_origin'}
                      />
                    </form>
                    </div>
       </div>
    )
}

export default Auth
