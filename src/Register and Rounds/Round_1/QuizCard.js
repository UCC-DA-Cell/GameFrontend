import React,{useContext} from 'react'
import { Card,  CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {AuthContext} from '../../Authentication/Auth-context/authContext' 
const QuizCard = (props) => {
  const auth= useContext(AuthContext);
  const changeQues=(i)=>{
    props.nextQues(i);
  }
  const valueHandler=(event)=>{
    props.setUserAns(event.target.value);
  }
  const checkQuestionHandler=async()=>{
    console.log(props.userAns)
    console.log(props.ques._id);
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}round1/create-submission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${auth.token}`
    },
    body:JSON.stringify({
      _id:props.ques._id,
      answer:props.userAns
    }),
   
  })
  if(res.status==200){
     console.log('correct ans');
     props.setCurrentQues(null);
  }
  else if(res.status==203){
    let ID;
    let sec=0;
    ID=setInterval(()=>{
      if(sec>5){
        let hdr=document.getElementById('status');
        if(hdr){
          document.getElementById('status').style.display="none";
        }
        clearInterval(ID);
      }else{
        let hdr=document.getElementById('status');
        if(hdr){
          document.getElementById('status').style.display="inline-block";
        }
      }
     sec++;
    },1000)
  }else{
   
    
      throw new Error('SOmething went wrong,could not get your question...');
    
    
  }
  }
    return (
        <div  >
      { props.ques &&  <Card body inverse color="info" >
        <CardHeader>{`Question:${props.ques.questionNumber} `}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.ques.question}</CardTitle>
          <CardText>
          <InputGroup>
        {/* <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon> */}
        <Input  onChange={valueHandler} />
      </InputGroup>
          </CardText>
          <Button  color="success" onClick={checkQuestionHandler}  >Submit</Button>
        </CardBody>
        <CardFooter>
          <div id="status" style={{display:'none',transition:'all 0.3s', transitionTimingFunction:'ease-in', color:'red'  }} >InCorrect Ans</div>
        </CardFooter>
      </Card>}
        </div>
    )
}

export default QuizCard
