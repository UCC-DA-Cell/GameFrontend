import React,{useContext,useState} from 'react'
import './QuizCard.css'
import VerifyQuesModel from './VerifyQuesModel'
import { Card,Col,FormGroup,Label,  CardHeader, CardFooter, CardBody,
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
import IncorrectQuesModal from './IncorrectQuesModal';
const QuizCard = (props) => {
  const auth= useContext(AuthContext);
  const changeQues=(i)=>{
    props.nextQues(i);
  }

  const [modal,setModal]=useState(false);
  const [modal2,setModal2]=useState(false);
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
     props.setShowNextQues(true);
  }
  else if(res.status==203){
    let ID;
    let sec=0;
    setModal2(true);
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
          <React.Fragment>
            <VerifyQuesModel modal={modal} setModal={setModal} checkQuestionHandler={checkQuestionHandler}  />
            <IncorrectQuesModal modal={modal2} setModal={setModal2} />
      { props.ques &&  <Card className="res_card"  inverse color="info" >
        <CardHeader>{`Question:${props.ques.questionNumber} `}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.ques.question}</CardTitle>
          <CardText>
          <InputGroup>
        
        <Input type="text" onChange={valueHandler} />
      </InputGroup>
      {/* <Col md={6}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col> */}
          </CardText>
          <Button  color="success" onClick={event=>setModal(true)}  >Submit</Button>
        </CardBody>
        <CardFooter>
          <div id="status" style={{display:'none',transition:'all 0.3s', transitionTimingFunction:'ease-in', color:'red'  }} >InCorrect Ans</div>
        </CardFooter>
      </Card>}
      </React.Fragment>
        </div>
    )
}

export default QuizCard
