import React,{useState,useContext,useEffect} from 'react'
import QuizCard from './QuizCard'
import './Quiz.css'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import LeaderBoard from '../../LeaderBoard/LeaderBoard'
import {AuthContext} from '../../Authentication/Auth-context/authContext'
const Quiz = () => {
    const auth=useContext(AuthContext);
    const [currentQues,setCurrentQues]=useState(null);
    const [userAns,setUserAns]=useState('');
    const [showLeaderBoard,setShowLeaderBoard]=useState(false);
    const [showNextQues,setShowNextQues]=useState(true)
   // if(!currentQues){
       useEffect(() => {
       const getQues=async()=>{
        
            const res =await  fetch(`${process.env.REACT_APP_SERVER_URL}round1/get-next-question`, {
                method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${auth.token}`
              }
            })
            if(res.status==204){
                let hd=document.getElementById('round_1_complete');
                if(hd){
                  document.getElementById('round_1_complete').style.display="inline-block";
                }
              }
              else if(res.status==200){
                const data =await res.json();
                setCurrentQues(data);
                console.log(data);
              }
            else{
            //    throw Error('Something went wrong could not get question');
            console.log('waiting....');
            }

           
           
      }
         getQues();
         setShowNextQues(false);
        }, [showNextQues]) 
  //  }
   
     const showLeaderBoardHandler=()=>{
         setShowLeaderBoard(prev=>!prev);
     }
    return (
        <div style={{height:'100vh',width:'100vw'}} >
        <div className="Quiz_box"  >
           <h1>Quiz- Round 1...<small>All The Best</small></h1>
            <main>
            
                <div id={`q_1`} style={{width:'500px', margin:'5px',color:'blue',justifyContent:'center'}} >
                    <QuizCard 
                     ques={currentQues}
                     setCurrentQues={setCurrentQues}
                    // nextQues={changeQuestionHandler}
                    //  question_id={currentQues._id}
                     setUserAns={setUserAns}
                     userAns={userAns}
                     setShowNextQues={setShowNextQues}
                    />
                </div>
        
                   <div>
                    <Button color="danger" style={{margin:'20px',}} ><Link to="/leaderBoard">Show LeaderBoard</Link></Button>
                  </div>
            {/* <Button color="danger" onClick={showLeaderBoardHandler}>LeaderBoard</Button> */}
            <div id="round_1_complete" >
             <h2>Thank-You For Submitting </h2>
                <Button color="success"><Link to="/">Go to Home Page </Link> </Button>
            </div>
            </main>
            
              
            
        </div>
        </div>
    )
}

export default Quiz
