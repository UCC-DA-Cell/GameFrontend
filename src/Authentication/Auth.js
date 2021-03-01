import React,{useState} from 'react'
import MainNav from '../Imported/MainNav'
import {GoogleLogin} from 'react-google-login'
import lock from './padlock.svg'
import './Auth.css'
const Auth = () => {
console.log(process.env);
  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }
const onSubmitHandler=()=>{
   console.log('data submitted')
}

const [loggedIn,setLoggedIn]=useState(false);
let myInput = document.getElementById("psw");
let length = document.getElementById("length");
console.log(myInput);


// When the user clicks on the password field, show the message box
if(myInput){
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
}

// When the user clicks outside of the password field, hide the message box
if(myInput){
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
}

// When the user starts to type something inside the password field
if(myInput){
myInput.onkeyup = function() {
 
  
 if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
  
 
}
}

    return (
        <div style={{backgroundImage:`url(${`https://wallpaperaccess.com/full/54720.jpg`})`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',
        backgroundSize:'cover',opacity:'0.8',height:'100vh',width:'100vw' }}  >
            <MainNav /><br/><br/><br/><br/>
             <div className="welcomee">
             <h2  >Sign-In here</h2>
            </div>
<div className="form_class">
  <img src={lock} alt="login" style={{height:'40vh',width:'50vw'}} /> 
  <form className="formm" action="./submission.html" onSubmit={onSubmitHandler} >
{ !loggedIn &&  (<div>
{/* <label for="username">User name</label> */}

<input className="inpt" type="text" placeholder="Username" id="username" name="username" required />
    </div>)}
    {/* <label for="email">E-mail</label> */}
    <input className="inpt" placeholder="Email" type="email" id="email" required />
    {/* <label for="psw">Password</label> */}
    <input className="inpt" placeholder="Password" type="password" id="psw" name="psw" pattern=".{8,}" title="atleast 8 or more characters" required /><br/>

    
    <button className="signinbtn" type="submit" > {loggedIn ? 'LogIn':'SignUp'}  </button><br/>
   {!loggedIn && <p style={{marginBottom:'1px'}} ><strong>Already have an account??</strong></p>}
    <div className="loggin">
    <a className="anchor"  onClick={()=>setLoggedIn(prev=>!prev)} > {loggedIn ?'SignUp':'LogIn'}  </a>
    <GoogleLogin
     clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
    />
  </div>
  </form>
</div>


{/* <div id="message">

  <p id="length" className="invalidd">Minimum <b>8 characters</b></p>
</div> */}
        </div>
    )
}

export default Auth
