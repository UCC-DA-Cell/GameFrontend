import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import './RegisterCard.css'
const RegisterCard = (props) => {
    return (
        <div className="main__card" >
            <h2><b>{props.event_name}</b></h2>
            <div className="content__card" >{props.event_details}</div>
           <Link to="/:userId/start" > <Button style={{margin:'5px'}}  color="success">Register</Button> </Link>
        </div>
    )
}

export default RegisterCard
