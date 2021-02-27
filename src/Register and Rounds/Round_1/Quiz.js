import React,{useState} from 'react'
import QuizCard from './QuizCard'
import './Quiz.css'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import LeaderBoard from '../../LeaderBoard/LeaderBoard'
const Quiz = () => {
    const QUIZ_QUESTIONS=[
        {
            id:1,
            text:'What is Your Name ?',
            ans:'Prajwal'
        },
        {
            id:2,
            text:'Where do you study',
            ans:'YMCA'
        },
        {
            id:3,
            text:'Which Branch ?',
            ans:'Prajwal'
        },
        {
            id:4,
            text:'Your Aim',
            ans:'Dunia pr razz karna hai bc'
        },
        {
            id:5,
            text:'Your Skills',
            ans:'React'
        }
    ]
    let ID;
    let cnt=0; 
    // const counter=()=>{
    //     console.log(cnt);
    //     if(cnt>=5){
    //         cnt=0;
    //         document.getElementById(`status_${i}`).style.display="none";
    //         clearInterval(ID);
    //     }
    //     cnt++;
    // }
    const [userAns,setUserAns]=useState('');
    const changeQuestionHandler=(i)=>{
        console.log(i);
        if(i==4){
            document.getElementById(`q_${i+1}`).style.display="none";
            document.getElementById('round_1_complete').style.display="inline-block";
        } 
        const counter=()=>{
            console.log(cnt);
            if(cnt>=5){
                cnt=0;
                document.getElementById(`status_${i}`).style.display="none";
                clearInterval(ID);
            }
            cnt++;
        }
      i=i+1;
      console.log(userAns);
      const d1=document.getElementById(`q_${i+1}`);
      const d2=document.getElementById(`q_${i}`)
      if(d1 && d2){
          if(QUIZ_QUESTIONS[i-1].ans===userAns){
              setUserAns(null);

      //  if(i<=5) {
            //console.log(i);
            document.getElementById(`q_${i+1}`).style.display="inline-block";
       // }
       
        document.getElementById(`q_${i}`).style.display="none"
      }
        else{
            ID=setInterval(counter,1000);
            document.getElementById(`status_${i}`).style.display="inline-block"
        }
    }
     

    }
    const [showLeaderBoard,setShowLeaderBoard]=useState(false);
     const showLeaderBoardHandler=()=>{
         setShowLeaderBoard(prev=>!prev);
     }
    return (
        <div className="Quiz_box" >
           <h1>Quiz- Round 1...<small>All The Best</small></h1>
            <main>
            {QUIZ_QUESTIONS.map((q,i)=>(
                <div id={`q_${i+1}`} style={{width:'500px', margin:'5px',color:'blue',justifyContent:'center'}} >
                    <QuizCard 
                     header={`Question: ${i+1}`}
                     ques={q.text}
                     nextQues={changeQuestionHandler}
                     index={i}
                     setUserAns={setUserAns}
                    />
                </div>
            ))}

            {/* <Button color="danger" onClick={showLeaderBoardHandler}>LeaderBoard</Button> */}
            <div id="round_1_complete" >
             <h2>Thank-You For Submitting </h2>
                <h4>Your Score: NA </h4>
                <Button color="success"><Link to="/">Go to Home Page </Link> </Button>
            </div>
            </main>
            
                <div>
                    <LeaderBoard />
                </div>
            
        </div>
    )
}

export default Quiz
