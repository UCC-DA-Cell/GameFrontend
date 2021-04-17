import React,{useEffect,useState,useContext} from 'react'
import R3card from './R3card'
import {AuthContext} from '../../Authentication/Auth-context/authContext'
import LoadingSpinner from '../../Imported/LoadingSpinner/LoadingSpinner'

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
    const [isLoading,setIsLoading]=useState(false);
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
            console.log(data);
            setQues(data);
        }
     }
     getQues();
      setQuesState(false);
    },[quesState])
        
    
    return (
        <React.Fragment>
       { !isLoading ? <div className="bckground_gf"  style={{color:'whitesmoke',
        justifyContent:'center',textAlign:'center',paddingTop:'130px',height:'100vh',width:'100vw',maxHeight:'100vh',overflow:'auto'}} >
            
           <h1 >Round 3</h1><br/>
           <h2>Find The Web</h2>
            {!complete && <R3card ques={ques} setQuesState={setQuesState} setIsLoading={setIsLoading} />}
            {complete && <div>
                
                <h1 style={{color:'white'}} >Thank You For Submitting.</h1>
                <h2  style={{color:'white'}}>Result will be out soon</h2>
                </div>}
       </div> : <LoadingSpinner /> }
       </React.Fragment>
    )
}

export default Finali
