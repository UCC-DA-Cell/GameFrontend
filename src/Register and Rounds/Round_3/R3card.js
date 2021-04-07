import React,{useState,useContext} from 'react'
import { Button } from 'reactstrap'
import {AuthContext} from '../../Authentication/Auth-context/authContext'
import './R3card.css'
const R3card = (props) => {
    const auth= useContext(AuthContext)
    const [checkedId,setCheckedId]=useState();
    const getId=(event)=>{
          setCheckedId(event);
    }
   const checkQuesHandler=async()=>{
    let chk=document.getElementById(checkedId);
    if(chk){
        chk.checked=false;
    }
    const res =await  fetch(`${process.env.REACT_APP_SERVER_URL}round3/create-submission`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${auth.token}`
      },
      body:JSON.stringify({
        _id:props.ques._id,
        optionID:checkedId
      })
    })
    if(res.status===200){
        console.log('correct ans');
        props.setQuesState(true);
    }
    else if(res.status===203){
        console.log('wrong ans');
        props.setQuesState(true);
    }
    else{
        console.log('some technical error.');
    }

   }
    return (
        
            <div className="wrapper_card">
            {/* <p>Links from <a href="https://sitepoint.com" tabindex="0">sitepoint.com</a></p> */}

            <ul className="linegrp" >
            <li className="linne" >
            <div className="info-wrap">
            <h2 className="hding" >{`${!props.ques?'NA':'Q '+ props.ques.questionNumber +': '+ props.ques.question}`}</h2>

          
             <div style={{textAlign:'left'}}>
                {props.ques && props.ques.options.map((p,i)=>(
                    <div>
                         <input id={p._id} style={{margin:'5px'}} type="radio" name="options" onClick={event=>getId(p._id)} />
                         <label for={`o${i}`}>{p.value}  </label><br/>
                    </div>
                   
                ))}
             </div>
           <Button color="success" style={{margin:'15px'}} onClick={checkQuesHandler} >SUBMIT</Button>
            </div>
            </li>

          
            </ul>

            </div>




        
    )
}

export default R3card
