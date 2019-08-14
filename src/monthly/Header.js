import React from "react";
import addMonths from "date-fns/add_months";
import format from "date-fns/format";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ date }) => (
  <header className="calendar-header">
    <h1 className="title">
      <Link className="arrow" to={`/${format(addMonths(date, -1), "YYYY/MM")}`}>
	<FaAngleLeft />
      </Link>
      {format(date, "MMMM YYYY")}
      <Link className="arrow" to={`/${format(addMonths(date, 1), "YYYY/MM")}`}>
	<FaAngleRight />
      </Link>
    </h1>
  </header>
);

export default Header;
