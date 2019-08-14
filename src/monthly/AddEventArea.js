import React from "react";
import classNames from "classnames";

const AddEventArea = ({ isDisabled, onClick }) => {
  return (
    <li
      className={classNames("add-event", { "-disabled": isDisabled })}
      onClick={() => {
	if (!isDisabled) {
	  onClick();
	}
      }}
    />
  );
};

export default AddEventArea;
