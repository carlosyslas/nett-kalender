import React from "react";
import classNames from "classnames";
import endOfDay from "date-fns/end_of_day";
import format from "date-fns/format";
import isPast from "date-fns/is_past";
import AddEventArea from "./AddEventArea";
import Event from "./Event";
import "./day_card.scss";

const DayCard = ({
  date,
  isDisabled,
  openEditModal,
  openDeleteModal,
  events = []
}) => {
  return (
    <div className={classNames("day-card", { "-disabled": isDisabled })}>
      <div className="date">{format(date, "D")}</div>
      <ul className="events">
	{events.map(event => {
	  return (
	    <Event
	      key={event.id}
	      isDisabled={isPast(event.start)}
	      dayCardDate={date}
	      openDeleteModal={openDeleteModal}
	      openEditModal={openEditModal}
	      {...event}
	    />
	  );
	})}
	<AddEventArea
	  isDisabled={isDisabled || isPast(endOfDay(date))}
	  onClick={() => openEditModal({ preselectedDate: date })}
	/>
      </ul>
    </div>
  );
};

export default DayCard;
