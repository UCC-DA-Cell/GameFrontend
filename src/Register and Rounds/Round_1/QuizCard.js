import React from 'react'
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
const QuizCard = (props) => {
  const changeQues=(i)=>{
    props.nextQues(i);
  }
  const valueHandler=(event)=>{
    props.setUserAns(event.target.value);
  }
    return (
        <div  >
        <Card body inverse color="info" >
        <CardHeader>{props.header}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.ques}</CardTitle>
          <CardText>
          <InputGroup>
        {/* <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon> */}
        <Input  onChange={valueHandler} />
      </InputGroup>
          </CardText>
          <Button onClick={(event)=>changeQues(props.index)} color="success"  >Submit</Button>
        </CardBody>
        <CardFooter>
          <div id={`status_${props.index+1}`} style={{display:'none',transition:'all 0.3s', transitionTimingFunction:'ease-in', color:'red'  }} >InCorrect Ans</div>
        </CardFooter>
      </Card>
        </div>
    )
}

export default QuizCard
