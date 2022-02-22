import { Modal } from 'react-bootstrap';
import './DetailsModal.scss';

const DetailsModal = (props) => {
  return (
    <Modal
      show={props.showModal}
      onHide={() => props.setShowModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      className="detailsModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalData?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.modalData?.company}</h4>
        <p>{props.modalData?.date}</p>
        <ul>
          {props.modalData?.responsibilities.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
