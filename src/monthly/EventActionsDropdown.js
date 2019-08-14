import React, { useState } from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import "./simple_dropdown.scss";

const EventActionsDropdown = ({
  label,
  date,
  eventId,
  openEditModal,
  openDeleteModal
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="simple-dropdown">
      <div className="label" onClick={() => setIsOpen(!isOpen)}>
	{label}
      </div>
      {isOpen && (
	<ul className="options">
	  <li
	    className="option -primary"
	    onClick={() => {
	      setIsOpen(false);
	      openEditModal({ eventId, preselectedDate: date });
	    }}
	  >
	    <FaEdit />
	  </li>
	  <li
	    className="option -delete"
	    onClick={() => {
	      setIsOpen(false);
	      openDeleteModal(eventId);
	    }}
	  >
	    <FaRegTrashAlt />
	  </li>
	</ul>
      )}
    </div>
  );
};

export default EventActionsDropdown;
