
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const IncorrectQuesModal = (props) => {
    //const [modal, setModal] = useState(false);

  const toggle = () => props.setModal(!props.modal);

    return (
        <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>You Are Wrong!!!</ModalHeader>
          <ModalBody>
            <div  >
                <img src="https://media.makeameme.org/created/you-are-wrong-5ab404.jpg" alt="you are wrong" style={{height:'300px',width:'300px'}} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Ok</Button>{' '}
            {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default IncorrectQuesModal
