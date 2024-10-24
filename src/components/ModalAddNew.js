import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateTry } from '../services/UserService';
import { toast } from 'react-toastify';

function ModalAddNew(props) {
    const {show, handleClose } = props;
    const [name, setName] = useState('');
    const [email, setEmai] = useState('');
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("")

    const handleImage = (e) => {
      // console.log(e.target.files)
      setImage((e.target.files[0]))
    } 

    const handleSave = async () => {
      try {
        let res = await postCreateTry(name, email, message, image);
        if (res){
          
          handleClose();
          setName('');
          setEmai('');
          setMessage('');
          setImage('');
          toast.success("A User is created succeed!")
        } else {
          toast.error("Error!")
        }
      } catch (error) {
        // Log the error details from the server
        // console.error("Error details: ", error.response?.data || error.message);
        toast.error("Error details: ", error.response?.data || error.message)
      }
    };

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Ob</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='body-add-new'>
                <div className='mb-3'>
                    <label className="form-label">Name</label>
                    <input 
                      type='text' 
                      className='form-control' 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Name</label>
                    <input 
                      type='text' 
                      className='form-control' 
                      value={email}
                      onChange={(e) => setEmai(e.target.value)}
                      />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Message</label>
                    <input 
                      type='text' 
                      className='form-control' 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Image</label>
                    <input 
                    type='file' 
                    className='form-control' 
                    onChange={handleImage}
                    />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalAddNew;