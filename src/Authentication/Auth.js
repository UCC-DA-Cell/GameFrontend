import React,{useState} from 'react'
import MainNav from '../Imported/MainNav'
import {GoogleLogin} from 'react-google-login'
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
        <div>
            <MainNav /><br/><br/><br/><br/>
             <div className="welcomee">
             <p>Welcome to the UCC-DAC Sign-up page</p>
            </div>
<div className="form_class">

  <form className="formm" action="./submission.html" onSubmit={onSubmitHandler} >
{ !loggedIn &&  (<div>
<label for="username">User name</label><br/>

<input className="inpt" type="text" id="username" name="username" required /><br/>
    </div>)}
    <label for="email">E-mail</label><br/>
    <input className="inpt" type="email" id="email" required /><br/>
    <label for="psw">Password</label><br/>
    <input className="inpt" type="password" id="psw" name="psw" pattern=".{8,}" title="atleast 8 or more characters" required /><br/>

    
    <button className="signinbtn" type="submit" > {loggedIn ? 'LogIn':'SignUp'}  </button><br/>
   {!loggedIn && <p><strong>Already have an account??</strong></p>}
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


<div id="message">

  <p id="length" className="invalidd">Minimum <b>8 characters</b></p>
</div>
        </div>
    )
}

export default Auth
