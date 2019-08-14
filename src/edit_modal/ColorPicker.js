import React, { useState } from "react";
import classNames from "classnames";
import "./color_picker.scss";

const ColorPicker = ({ value = 1, onChange = () => {} }) => {
  const [currentValue, setValue] = useState(value);

  return (
    <ul className="color-picker">
      {Array.from({ length: 6 }).map((_, index) => (
	<li
	  key={index}
	  onClick={() => {
	    const newValue = index + 1;
	    setValue(newValue);
	    onChange(newValue);
	  }}
	  className={classNames(`color -bg-${index + 1}`, {
	    "-selected": currentValue === index + 1
	  })}
	/>
      ))}
    </ul>
  );
};

export default ColorPicker;
