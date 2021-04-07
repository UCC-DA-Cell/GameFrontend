import React,{useEffect,useState,useContext} from 'react'
import R3card from './R3card'
import {AuthContext} from '../../Authentication/Auth-context/authContext'
const Finali = () => {
    const auth= useContext(AuthContext)
    const DUMMY_QUESTION={
        _id:'1',
        text:'What do you think is black hole',
        ans:0,
        options:[
           'no idea','a place in space','a place on earth'
        ]
    }
    const [ques,setQues]=useState();
    const [quesState,setQuesState]=useState(true);
    const [complete,setComplete]=useState(false);
    useEffect(()=>{
     const getQues=async()=>{
         console.log(auth.token);
        const res =await fetch(`${process.env.REACT_APP_SERVER_URL}round3/get-next-question`, {
            method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${auth.token}`
          }
        })
        if(res.status==204){
            console.log('something went wrong..');
            setComplete(true);
        }
        else{
            const data=await res.json();
            setQues(data);
        }
     }
     getQues();
      setQuesState(false);
    },[quesState])
        
    
    return (
        <div style={{backgroundColor:'rgba(59, 58, 58, 0.808)',color:'whitesmoke',
        justifyContent:'center',textAlign:'center',paddingTop:'130px',height:'100vh',width:'100vw'}} >
            
           <h1 >Round 3</h1><br/>
           <h2>Find The Web</h2>
            {!complete && <R3card ques={ques} setQuesState={setQuesState} />}
            {complete && <div>
                
                <h1 style={{color:'white'}} >Thank You For Submitting.</h1>
                <h2  style={{color:'white'}}>Result will be out soon</h2>
                </div>}
       </div>
    )
}

export default Finali
