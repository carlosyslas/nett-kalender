import React from "react";
import startOfMonth from "date-fns/start_of_month";
import endOfMonth from "date-fns/end_of_month";
import startOfWeek from "date-fns/start_of_week";
import endOfWeek from "date-fns/end_of_week";
import eachDay from "date-fns/each_day";
import format from "date-fns/format";
import isSameMonth from "date-fns/is_same_month";
import { WEEKDAYS } from "./constants";
import DayCard from "./DayCard";
import Header from "./Header";
import "./month.scss";

const getDatesInMonth = date =>
  eachDay(startOfWeek(startOfMonth(date)), endOfWeek(endOfMonth(date)));

const Month = ({
  date: selectedDate,
  events,
  openEditModal,
  openDeleteModal
}) => (
  <div>
    <Header date={selectedDate} />
    <div className="month-view">
      {WEEKDAYS.map(day => (
	<div key={day} className="day-name">
	  {day}
	</div>
      ))}
      {getDatesInMonth(selectedDate).map(date => (
	<DayCard
	  key={format(date, "YYYY-MM-DD")}
	  date={date}
	  isDisabled={!isSameMonth(date, selectedDate)}
	  events={(events && events[format(date, "MM-DD")]) || []}
	  openEditModal={openEditModal}
	  openDeleteModal={openDeleteModal}
	/>
      ))}
    </div>
  </div>
);

export default Month;
