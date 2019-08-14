import React from "react";
import Modal from "react-modal";
import EditForm from "./EditForm";
import "../modal.scss";

const EditModal = ({ isOpen, close, ...rest }) => (
  <Modal
    isOpen={isOpen}
    className="modal"
    overlayClassName="modal-overlay"
    onRequestClose={close}
  >
    {isOpen && <EditForm close={close} {...rest} />}
  </Modal>
);

export default EditModal;
