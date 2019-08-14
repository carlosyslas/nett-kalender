import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import { FaEllipsisV } from "react-icons/fa";
import EventActionsDropdown from "./EventActionsDropdown";
import "./event.scss";

const Event = ({
  isDisabled,
  dayCardDate,
  openDeleteModal,
  openEditModal,
  id,
  color,
  start,
  content
}) => (
  <li
    className={classNames(`calendar-event -color-${color}`, {
      "-disabled": isDisabled
    })}
  >
    <span className="popover">{format(start, "HH:mm")}</span>
    <span className="content">{content}</span>
    {!isDisabled && (
      <EventActionsDropdown
	eventId={id}
	date={dayCardDate}
	openEditModal={openEditModal}
	openDeleteModal={openDeleteModal}
	label={<FaEllipsisV />}
      />
    )}
  </li>
);

export default Event;
