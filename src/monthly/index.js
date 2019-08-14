import React, { useEffect } from "react";
import { connect } from "react-redux";
import parse from "date-fns/parse";
import { fetchMonthEvents } from "./actions";
import { openEditModal } from "../edit_modal/actions";
import { openDeleteModal } from "../delete_modal/actions";
import { selectYearEvents } from "./selectors";
import Month from "./Month";

const Monthly = ({ fetchMonthEvents, events, match, ...rest }) => {
  const { year, month } = match.params;
  const date = parse(`${year}-${month}-01`);
  useEffect(
    () => {
      fetchMonthEvents({ year, month });
    },
    [match]
  );

  return <Month date={date} events={events} {...rest} />;
};

const mapStateToProps = (state, ownProps) => ({
  events: selectYearEvents(state, ownProps.match.params)
});

const mapDispatchToprops = {
  fetchMonthEvents,
  openEditModal,
  openDeleteModal
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Monthly);
