import React,{useContext} from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import './RegisterCard.css'
import {AuthContext} from '../../Authentication/Auth-context/authContext'
const RegisterCard = (props) => {
    const auth=useContext(AuthContext)
    const registerHandler=async()=>{
        console.log(auth.token);
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}event/register-user`, {
            method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${auth.token}`
          }
        })
        if(res.status!=200){
           console.log('something went wrong...')
        }

    }
    return (
        <div className="main__card" >
            <h2><b>{props.event_name}</b></h2>
            <div className="content__card" >{props.event_details}</div>
        <Link to="/start" > <Button  onClick={registerHandler} style={{margin:'5px'}}  color="success">Register</Button> </Link>
        </div>
    )
}

export default RegisterCard
