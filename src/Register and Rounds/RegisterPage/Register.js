import React from 'react'
import RegisterCard from './RegisterCard'
import './Register.css'
const Register = () => {
    return (
        <div className="main__regsiter" >
            <div className="register__page" >
                <h1 style={{color:'white'}} >Registration Page for Upcoming Events... </h1>
                <div className="flex_box_events" >
                   <RegisterCard event_name="XYZ-Event"
                    event_details="This Event
                    consists of 4 Rounds. Totally based on quizzes,riddles,puzzles,picture
                     manipulation. Main aim of this event is check and develop technical skills of the 
                     competitor. "  />
                </div>
            </div>
        </div>
    )
}

export default Register
