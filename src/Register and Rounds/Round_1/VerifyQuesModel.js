import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const VerifyQuesModel = (props) => {
   // const [modal, setModal] = useState(false);
    const toggle = () => props.setModal(!props.modal);
    return (
        <div>
      {/* <Button color="danger" onClick={toggle}></Button> */}
      <Modal isOpen={props.modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Are You Sure ?</ModalHeader>
        <ModalBody>
          <img src="https://memetemplateindia.com/wp-content/uploads/2020/05/amitabh-bachchan-sure-2.png" alt="are you sure" style={{height:'300px',width:'300px'}} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={()=>{
              toggle();
              props.checkQuestionHandler();
              }}  >OK</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
}

export default VerifyQuesModel
