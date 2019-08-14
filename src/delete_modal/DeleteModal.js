import React from "react";
import Modal from "react-modal";
import "../modal.scss";

const DeleteModal = ({ isOpen, close, deleteEvent, id, content }) => (
  <Modal
    isOpen={isOpen}
    className="modal"
    overlayClassName="modal-overlay"
    onRequestClose={close}
  >
    Are you sure you want to delete the event <b>{content}</b>?
    <div className="actions">
      <button className="btn" onClick={close}>
	Cancel
      </button>
      <button
	className="btn -delete"
	onClick={async () => {
	  await deleteEvent(id);
	  close();
	}}
      >
	Delete
      </button>
    </div>
  </Modal>
);

export default DeleteModal;
