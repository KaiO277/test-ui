import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddNew(props) {
    const {show, handleClose } = props
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
                    <input type='text' className='form-control' />
                    <div className='form-text'>kakaka</div>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Message</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Image</label>
                    <input type='file' className='form-control' />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalAddNew;