
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function EditModal() {

  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);


  let handleChange = e => {
      setData({[e.target.name]: e.target.value})
  }
  let content = Object.keys(data).map(key => {
    return (
      <div>
        <label class="col-sm-12 col-form-label">{key}</label>
        <div>
            <input type="text" onChange={handleChange} class="form-control" name={key.toString()} placeholder={key.toString()}/>
        </div>
      </div>
    );
  });
  const handleEdit = () => {
    console.log(data);
  }
  const handleShow = () => {
      axios.get('/js/test.json').then(response => {
        console.log(response);
        setShow(true);
        setData(response.data)
      }).catch(error => {
        console.log(error);
      });
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} style={{marginTop: '1.7rem'}}>
        Edit Modal
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
            <>
            {content}
            </>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
